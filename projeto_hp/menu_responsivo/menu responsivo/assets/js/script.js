function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/img/close_white_36dp.svg";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir os personagens na tela
    function exibirPersonagens(personagens) {
        const elementoPersonagens = document.getElementById('personagens');
        elementoPersonagens.innerHTML = ''; // Limpa os personagens anteriores

        // Itera sobre os próximos 10 personagens a partir do índice atual
        for (let i = startIndex; i < startIndex + 10 && i < personagens.length; i++) {
            const personagem = personagens[i];
            const novoPersonagem = document.createElement('div');
            novoPersonagem.classList.add('personagem-box');

            const imagem = document.createElement('img');
            if (personagem.image) {
                imagem.src = personagem.image;
            } else {
                // Se o personagem não tiver uma imagem, usamos uma imagem branca como padrão
                imagem.src = "https://cdn-icons-png.flaticon.com/512/1695/1695213.png"; 
            }
            imagem.alt = personagem.name;

            const nome = document.createElement('h2');
            nome.textContent = personagem.name;

            novoPersonagem.appendChild(imagem);
            novoPersonagem.appendChild(nome);

            elementoPersonagens.appendChild(novoPersonagem);
        }
    }

    // Variável para rastrear o índice do primeiro personagem a ser exibido
    let startIndex = 0;

    // Função para lidar com o clique no botão de próxima página
    const proximaPaginaBtn = document.getElementById('proxima-pagina');
    if (proximaPaginaBtn) {
        proximaPaginaBtn.addEventListener('click', () => {
            startIndex += 10; // Incrementa o índice do primeiro personagem
            exibirPersonagens(personagens); // Exibe os próximos personagens
        });
    } else {
        console.error('Elemento com ID "proxima-pagina" não encontrado.');
    }

    // Função para lidar com o clique no botão de página anterior
    const paginaAnteriorBtn = document.getElementById('pagina-anterior');
    if (paginaAnteriorBtn) {
        paginaAnteriorBtn.addEventListener('click', () => {
            startIndex -= 10; // Decrementa o índice do primeiro personagem
            if (startIndex < 0) {
                startIndex = 0; // Garante que o índice não seja negativo
            }
            exibirPersonagens(personagens); // Exibe os personagens anteriores
        });
    } else {
        console.error('Elemento com ID "pagina-anterior" não encontrado.');
    }

    // Fazer a requisição à API e chamar a função para exibir os personagens
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar a API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            personagens = data; // Armazenar a lista de personagens
            exibirPersonagens(personagens); // Exibir os primeiros personagens
        })
        .catch(error => {
            console.error('Erro:', error);
        });

});



