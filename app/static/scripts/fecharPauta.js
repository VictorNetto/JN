// Pegando elementos do DOM
const botaoFechar = document.getElementById('fecharPauta');
const modal = document.getElementById('modal');
const confirmar = document.getElementById('confirmarFechamento');
const cancelar = document.getElementById('cancelarFechamento');

// Quando o botão "Fechar Pauta" for clicado, o modal aparece
    botaoFechar.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Quando clicar no botão "Cancelar", o modal fecha
    cancelar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Quando clicar em "Sim", exibe um alerta e fecha o modal
confirmar.addEventListener('click', () => {
    fecharPauta();
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
            modal.style.display = 'none';
        }
});

function fecharPauta() {
    const foraDePauta = [];
    const dentroDePauta = [];

    const foraPautaElem = document.getElementById('left-panel');
    const noticiasForaPauta = foraPautaElem.querySelectorAll('.news');
    noticiasForaPauta.forEach(elem => {
        foraDePauta.push(elem.id);
    })

    const dentroPautaElem = document.getElementById('right-panel');
    const noticiasDentroPauta = dentroPautaElem.querySelectorAll('.news');
    noticiasDentroPauta.forEach(elem => {
        dentroDePauta.push(elem.id);
    })

    dados = { foraDePauta: foraDePauta, dentroDePauta: dentroDePauta };
    fetch('/fechar-pauta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    console.log({ foraDePauta: foraDePauta, dentroDePauta: dentroDePauta });
}