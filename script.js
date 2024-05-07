function calcularDiferencaTempo(dataReferencia) {
    const dataAtual = new Date();

    // Calcula a diferença de tempo em milissegundos
    const diferencaTempo = dataAtual.getTime() - dataReferencia.getTime();
    console.log(diferencaTempo);

    // Calcula anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

    return { anos, meses, dias, horas, minutos, segundos };
}

function atualizarContagemTempoNamoro(dataReferencia, intervalo, id, desc) {
    const tempoDecorridoElemento = document.getElementById(id);

    setInterval(function () {
        const diferenca = calcularDiferencaTempo(dataReferencia);
        tempoDecorridoElemento.innerHTML = `Tempo decorrido desde ${desc}:<br>
      ${diferenca.anos} ${diferenca.anos <= 1 ? "ano" : "anos"}, ${diferenca.meses} meses, ${diferenca.dias} dias, ${diferenca.horas} horas, ${diferenca.minutos} minutos e ${diferenca.segundos} segundos.`;
    }, intervalo);
}

const dataReferenciaNamoro = new Date('2023-10-07T18:30:00');
const dataReferenciaSaida = new Date('2023-01-07T17:30:00');
const intervaloAtualizacao = 1000; // 1 segundo

atualizarContagemTempoNamoro(dataReferenciaSaida, intervaloAtualizacao, "tempoDecorridoSaida", "o dia mais feliz da minha vida");
atualizarContagemTempoNamoro(dataReferenciaNamoro, intervaloAtualizacao, "tempoDecorridoNamoro", "o começo do nosso namoro oficial");

const dataAtual = new Date();
const diaAtual = dataAtual.getDate();

if (diaAtual === 7) {
  document.getElementById('aniversario').style.display = 'block';
}

const photosData = [
    { 
        imageUrl: 'IMG-20230905-WA0002.jpg',
        description: 'Primeira vez que te pedi em namoro, eu tava morrendo de medo kkkk'
    },
    { 
        imageUrl: 'bereal-2023-01-24-1156.jpeg',
        description: 'Aqui eu já sabia que não ia só mais um encontro comum, sabia que teríamos algo a mais!'
    },
    { 
        imageUrl: 'Screenshot_20230129_050339_BeReal.png',
        description: 'O dia que eu percebi que você era doidinha e tudo ia dar muito certo para gente.'
    },
    { 
        imageUrl: '20230910_103032.jpg',
        description: 'O dia que te fiz virar corintiana por um dia, e queria te levar mais vezes, mas o Corinthians não ajuda'
    },
    { 
        imageUrl: 'IMG-20230220-WA0047.jpg',
        description: 'O melhor carnaval, juro que te amei mais quando você aceitou ir comigo. Estavamos dois gostosos exalando amor!'
    },
    { 
        imageUrl: 'IMG-20230415-WA0025.jpg',
        description: 'O dia mais bizarro de todos, um churrascão comigo pegando um bisnaguinha, e a gente tirando foto com o Henrique e a Julia! (que não namoravam ainda)'
    },
    { 
        imageUrl: 'IMG-20230514-WA0001.jpg',
        description: 'O nosso pagode, melhor dia possível, ver todos que eu amo, com a pessoa que mais amo nesse mundo'
    }
];

// Função para embaralhar o array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para criar os elementos HTML e exibir as fotos e descrições
function displayPhotos() {
    const photoContainer = document.getElementById('photoContainer');
    const shuffledPhotos = shuffleArray(photosData);

    shuffledPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('fotos');
        card.style = "width: 350px; height: 500px; background: #D9D9D9;"

        const img = document.createElement('img');
        img.classList.add('photo-img');
        img.src = "./assets/"+photo.imageUrl;
        img.alt = photo.description;

        const desc = document.createElement('span');
        desc.textContent = photo.description;
        desc.classList.add("desc")

        card.appendChild(img);
        card.appendChild(desc);
        photoContainer.appendChild(card);
    });
}


// Chama a função para exibir as fotos e descrições
displayPhotos();