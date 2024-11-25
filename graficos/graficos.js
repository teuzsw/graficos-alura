const url = 'https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)

        console.log(dados);
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container_texto')
        paragrafo.innerHTML = `Você sabia que o facebook tem cerca de <span>${dados.Facebook}</span> usuários no total?`
        console.log(paragrafo)
        
        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
    }

visualizarInformacoesGlobais()