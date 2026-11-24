document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    const campos = form.querySelectorAll('.editorial-input');

    // Expressões Regulares (REGEX) para validação customizada (telefone, e-mail e data)
    const expressoesRegulares = {
        phone: /^\(?[1-9]{2}\)?\s?(?:9\d{4}|[2-8]\d{3})-?\d{4}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        dob: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    };

    const mensagensCampo = {
        username: {
            valueMissing: 'Por favor, informe seu nome de usuário.',
            tooShort: 'O nome de usuário deve ter pelo menos 3 caracteres.',
            sucesso: 'Nome de usuário válido.'
        },
        email: {
            valueMissing: 'Por favor, informe seu endereço de e-mail.',
            typeMismatch: 'Insira um endereço de e-mail válido (ex.: nome@dominio.com).',
            regexInvalid: 'Insira um endereço de e-mail com domínio válido (ex.: nome@dominio.com).',
            sucesso: 'E-mail válido.'
        },
        phone: {
            valueMissing: 'Por favor, informe seu número de telefone.',
            tooShort: 'O telefone deve conter pelo menos 10 dígitos com DDD.',
            patternMismatch: 'Formato inválido. Informe um DDD válido e o número (ex.: (11) 99999-9999).',
            regexInvalid: 'Telefone inválido. Informe um DDD válido (11 a 99) e o número (ex.: (11) 99999-9999).',
            sucesso: 'Telefone válido.'
        },
        dob: {
            valueMissing: 'Por favor, informe sua data de nascimento.',
            rangeUnderflow: 'A data de nascimento não pode ser anterior a 01/01/1900.',
            rangeOverflow: 'A data de nascimento não pode ser superior a 31/12/2026.',
            regexInvalid: 'Formato de data inválido.',
            sucesso: 'Data de nascimento válida.'
        },
        password: {
            valueMissing: 'Por favor, crie uma senha.',
            tooShort: 'A senha deve conter no mínimo 8 caracteres.',
            sucesso: 'Senha válida.'
        }
    };

    function obterMensagemErro(campo) {
        const { validity, id, minLength, min, max } = campo;
        const valor = campo.value.trim();
        const config = mensagensCampo[id] || {};
        const regex = expressoesRegulares[id];

        if (validity.valueMissing) {
            return config.valueMissing || 'Este campo é obrigatório.';
        }
        if (validity.typeMismatch) {
            return config.typeMismatch || 'O formato informado é inválido.';
        }
        if (validity.tooShort) {
            return config.tooShort || `O campo deve ter no mínimo ${minLength} caracteres.`;
        }
        if (validity.rangeUnderflow) {
            return config.rangeUnderflow || `O valor mínimo permitido é ${min}.`;
        }
        if (validity.rangeOverflow) {
            return config.rangeOverflow || `O valor máximo permitido é ${max}.`;
        }
        if (validity.patternMismatch) {
            return config.patternMismatch || 'O valor informado não corresponde ao formato esperado.';
        }
        if (regex && !regex.test(valor)) {
            return config.regexInvalid || 'O valor informado não corresponde ao padrão esperado.';
        }
        return '';
    }

    function validarCampo(campo) {
        // Sempre limpa o estado anterior antes de revalidar
        campo.setCustomValidity('');

        const mensagemSpan = campo.parentElement.querySelector('.validation-message');
        const mensagemErro = obterMensagemErro(campo);

        if (mensagemErro) {
            campo.setCustomValidity(mensagemErro);
        }

        const valido = campo.checkValidity();

        if (!valido) {
            campo.classList.add('input-error');
            campo.classList.remove('input-success');
            if (mensagemSpan) {
                mensagemSpan.textContent = campo.validationMessage;
                mensagemSpan.classList.add('error');
                mensagemSpan.classList.remove('success');
            }
            return false;
        }

        campo.classList.remove('input-error');
        campo.classList.add('input-success');
        if (mensagemSpan) {
            const config = mensagensCampo[campo.id] || {};
            mensagemSpan.textContent = config.sucesso || 'Campo preenchido corretamente.';
            mensagemSpan.classList.remove('error');
            mensagemSpan.classList.add('success');
        }
        return true;
    }

    campos.forEach((campo) => {
        campo.addEventListener('blur', () => {
            campo.dataset.interagido = 'true';
            validarCampo(campo);
        });

        campo.addEventListener('input', () => {
            campo.setCustomValidity('');
            if (campo.dataset.interagido === 'true') {
                validarCampo(campo);
            }
        });
    });

    const botaoSubmit = form.querySelector('button[type="submit"]');
    const linkSubmit = botaoSubmit ? botaoSubmit.querySelector('a[href]') : null;

    if (linkSubmit) {
        linkSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            if (typeof form.requestSubmit === 'function') {
                form.requestSubmit();
            } else {
                form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            }
        });
    }

    form.addEventListener('submit', (event) => {
        let formularioValido = true;
        let primeiroInvalido = null;

        campos.forEach((campo) => {
            campo.dataset.interagido = 'true';
            const campoValido = validarCampo(campo);
            if (!campoValido) {
                formularioValido = false;
                if (!primeiroInvalido) {
                    primeiroInvalido = campo;
                }
            }
        });

        if (!formularioValido) {
            event.preventDefault();
            if (primeiroInvalido) {
                primeiroInvalido.focus();
            }
            return;
        }

        if (linkSubmit) {
            event.preventDefault();
            window.location.href = linkSubmit.getAttribute('href');
        }
    });
});
