const url = "https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json"

async function = visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo document.createElement('p')
    const container = document.getElementById('graficos-container')
    container.appendchild(paragrafo)
    paragrafo.classList.add('graficos-container__texto')
   paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.Fabebook} de usuários no Facebook?`
    console.log(paragrafo);
}

visualizarInformacoesGlobais()
