document.addEventListener('DOMContentLoaded', function() {
    function verificarLarguraJanela() {
        const larguraJanela = window.innerWidth;
        // console.log(larguraJanela);

        if (larguraJanela <= 1100) { // Condição para dispositivos móveis (pode ajustar o valor conforme necessário)
            document.querySelector('.carousel-container').style.display = 'block';
            document.getElementById('photoContainer').style.display = 'none';
            displayPhotos1();
        } else {
            document.getElementById('photoContainer').style.display = 'flex';
            document.querySelector('.carousel-container').style.display = 'none';
            displayPhotos();
        }
    }

    verificarLarguraJanela(); // Verifica a largura da janela ao carregar a página

    window.addEventListener('resize', verificarLarguraJanela); // Verifica a largura ao redimensionar a janela
});

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
    },
    { 
        imageUrl: 'IMG-20230611-WA0010.jpg',
        description: 'O nosso JUCA, te convenci a ir e ainda conheci suas amigas que viram o quanto que eu realmente gostava de você.'
    },
    { 
        imageUrl: 'IMG-20230709-WA0012.jpg',
        description: 'Rolê aleatório essa foto totalmente kakakakaka'
    },
    { 
        imageUrl: 'IMG-20231102-WA0032.jpg',
        description: 'Te amo para todo o sempre, e nunca cansarei de mostrar meu amor ❤️'
    },
    { 
        imageUrl: 'Screenshot_20230202_162951_Instagram.png',
        description: 'Sim, eu tenho essa foto salva, eu fiquei bobo de receber isso hihihi'
    },
    { 
        imageUrl: 'Screenshot_20230205_142233_BeReal.png',
        description: 'Meus dois amores em uma foto só ❤️'
    },
    { 
        imageUrl: 'Screenshot_20230614_181456_Instagram.png',
        description: 'O fatídico dia que entrei para o seu feed, e fui eternizado lá :)'
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
    const photoContainer1 = document.getElementById('photoContainer1');
    photoContainer.childNodes.forEach(node => photoContainer.removeChild(node));    
    photoContainer1.childNodes.forEach(node => photoContainer1.removeChild(node));    
    const shuffledPhotos = shuffleArray(photosData);

    shuffledPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('fotos');
        card.style = "width: 350px; height: 500px; background: #D9D9D9;"

        const img = document.createElement('img');
        img.classList.add('photo-img');
        img.src = "../../assets/"+photo.imageUrl;
        img.alt = photo.description;

        const desc = document.createElement('span');
        desc.textContent = photo.description;
        desc.classList.add("desc")

        card.appendChild(img);
        card.appendChild(desc);
        photoContainer.appendChild(card);
    });
}

function displayPhotos1() {
    const photoContainer1 = document.getElementById('photoContainer1');
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.childNodes.forEach(node => photoContainer.removeChild(node));   
    photoContainer1.childNodes.forEach(node => photoContainer1.removeChild(node));    
    const shuffledPhotos = shuffleArray(photosData);

    shuffledPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('fotos');
        card.style = "width: 350px; height: 500px; background: #D9D9D9;"

        const img = document.createElement('img');
        img.classList.add('photo-img');
        img.src = "../../assets/"+photo.imageUrl;
        img.alt = photo.description;

        const desc = document.createElement('span');
        desc.textContent = photo.description;
        desc.classList.add("desc")

        card.appendChild(img);
        card.appendChild(desc);
        photoContainer1.appendChild(card);
    });
}