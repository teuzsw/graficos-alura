const url = 'https://raw.githubusercontent.com/teuzsw/graficos-alura/refs/heads/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    // Função para formatar números grandes
    function formatarNumero(num) {
        if (num >= 1e9) {
            return (num / 1e9).toFixed(1) + ' bilhões'; // Ex: 33e9 -> 33 bilhões
        } else if (num >= 1e6) {
            return (num / 1e6).toFixed(1) + ' milhões'; // Ex: 33e6 -> 33 milhões
        } else if (num >= 1e3) {
            return (num / 1e3).toFixed(1) + ' mil'; // Ex: 33e3 -> 33 mil
        } else {
            return num; // Para números menores que mil, exibe o número diretamente
        }
    }

    const pessoasConectadas = formatarNumero(dados.total_pessoas_conectadas);
    const pessoasNoMundo = formatarNumero(dados.total_pessoas_mundo);

    console.log(dados);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container_texto');
    paragrafo.innerHTML = `Você sabia que o Facebook tem cerca de <span>${formatarNumero(dados.Facebook)}</span> usuários no total?`;

    console.log(paragrafo);

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
