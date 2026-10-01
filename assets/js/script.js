document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu-principal');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            const aberto = menu.classList.toggle('ativo');
            menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
            menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        });
    }

    const contraste = document.querySelector('.contraste-toggle');
    if (contraste) {
        if (localStorage.getItem('altoContraste') === 'sim') {
            document.body.classList.add('alto-contraste');
            contraste.setAttribute('aria-pressed', 'true');
        }
        contraste.addEventListener('click', function () {
            const ativo = document.body.classList.toggle('alto-contraste');
            contraste.setAttribute('aria-pressed', ativo ? 'true' : 'false');
            localStorage.setItem('altoContraste', ativo ? 'sim' : 'nao');
        });
    }

    const modal = document.getElementById('modal-info');
    const abrir = document.querySelector('[data-abrir-modal]');
    const fechar = document.querySelector('[data-fechar-modal]');
    let focoAnterior = null;

    function fecharModal() {
        if (!modal) return;
        modal.classList.remove('aberto');
        modal.setAttribute('aria-hidden', 'true');
        if (focoAnterior) focoAnterior.focus();
    }

    if (modal && abrir && fechar) {
        abrir.addEventListener('click', function () {
            focoAnterior = document.activeElement;
            modal.classList.add('aberto');
            modal.setAttribute('aria-hidden', 'false');
            fechar.focus();
        });
        fechar.addEventListener('click', fecharModal);
        modal.addEventListener('click', function (e) {
            if (e.target === modal) fecharModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('aberto')) fecharModal();
        });
    }

    const form = document.getElementById('form-cadastro');
    const alerta = document.getElementById('alerta-sucesso');
    if (form && alerta) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (form.checkValidity()) {
                alerta.classList.add('visivel');
                alerta.focus();
            } else {
                form.reportValidity();
            }
        });
        form.addEventListener('reset', function () {
            alerta.classList.remove('visivel');
        });
    }
});
