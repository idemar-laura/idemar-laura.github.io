const dataAtual = new Date();
const diaAtual = dataAtual.getDate();
const mesAtual = dataAtual.getMonth();

if (diaAtual === 7) {
  document.getElementById('aniversario-nosso').style.display = 'block';
}

if (diaAtual === 3 && mesAtual === 12) {
  document.getElementById('aniversario-Laura').style.display = 'block';
}


function gerarPoemaParaLaura() {
    const carta = document.getElementById("carta");
    // Lista de palavras para usar no poema
    const adjetivos = ['linda', 'encantadora', 'doce', 'radiante', 'apaixonante'];
    const sentimentos = ['amor', 'ternura', 'paixão', 'carinho', 'admiração'];
    const acoes = ['abraçar', 'beijar', 'acarinhar', 'cuidar', 'celebrar'];

    // Gerar versos aleatórios usando as palavras acima
    const verso1 = `Para minha ${adjetivos[Math.floor(Math.random() * adjetivos.length)]} Laura,`;
    const verso2 = `Teu ${sentimentos[Math.floor(Math.random() * sentimentos.length)]} é a chama que aquece meu coração,`;
    const verso3 = `Em cada momento juntos, desejo ${acoes[Math.floor(Math.random() * acoes.length)]} te e te amar com devoção.`;

    // Retornar o poema completo
    carta.innerHTML = `<h1>${verso1}</h1>\n<p>${verso2}</p>\n<p>${verso3}</p>`;
}

gerarPoemaParaLaura();

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {gerarPoemaParaLaura()});

