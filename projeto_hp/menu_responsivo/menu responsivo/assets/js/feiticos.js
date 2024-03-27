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

document.addEventListener('DOMContentLoaded', function () {
    let casas; // Definindo a variável alunos

    // Função para exibir os alunos na tela
    function exibirCasas(Casas) {
        const elementoCasas = document.getElementById('casas');
        elementoCasas.innerHTML = ''; // Limpa os alunos anteriores

        // Itera sobre os próximos alunos
        for (let i = startIndex; i < startIndex + 10 && i < Casas.length; i++) {
            const casa = casas[i];
            const novoCasa = document.createElement('div');
            novoCasa.classList.add('casas-box');

            const imagem = document.createElement('img');
            if (casa.image) {
                imagem.src = casa.image;
            } else {
                // Se o aluno não tiver uma imagem, usamos uma imagem branca como padrão
                imagem.src = "https://cdn-icons-png.flaticon.com/512/1695/1695213.png";
            }
            imagem.alt = casa.name;

            const nome = document.createElement('h2');
            nome.textContent = casa.name;

            novoCasa.appendChild(imagem);
            novoCasa.appendChild(nome);

            elementoCasas.appendChild(novoCasa);
        }
    }

    // Variável para rastrear o índice do primeiro aluno a ser exibido
    let startIndex = 0;

    // Função para lidar com o clique no botão de próxima página
    const proximaPaginaBtn = document.getElementById('proxima-pagina');
    if (proximaPaginaBtn) {
        proximaPaginaBtn.addEventListener('click', () => {
            startIndex += 10; // Incrementa o índice do primeiro aluno
            exibirCasas(casas); // Exibe os próximos alunos
        });
    } else {
        console.error('Elemento com ID "proxima-pagina" não encontrado.');
    }

    // Função para lidar com o clique no botão de página anterior
    const paginaAnteriorBtn = document.getElementById('pagina-anterior');
    if (paginaAnteriorBtn) {
        paginaAnteriorBtn.addEventListener('click', () => {
            startIndex -= 10; // Decrementa o índice do primeiro aluno
            if (startIndex < 0) {
                startIndex = 0; // Garante que o índice não seja negativo
            }
            exibirCasas(casas); // Exibe os alunos anteriores
        });
    } else {
        console.error('Elemento com ID "pagina-anterior" não encontrado.');
    }

    // Fazer a requisição à API e chamar a função para exibir os alunos
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar a API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            casas = data; // Armazenar a lista de alunos
            exibirCasas(casas); // Exibir os primeiros alunos
        })
        .catch(error => {
            console.error('Erro:', error);
        });

});
const qualCasa = document.getElementById('Slytherin');
if (qualCasa) {
    qualCasa.addEventListener('click', () => {
        window.location.href = './pages'
    });
} else {
    console.error('Elemento com ID "proxima-pagina" não encontrado.');
}
debugger
const button = document.getElementById('slytherin')
button.addEventListener('click', () => {
    const slytherin = 'slytherin'
    fetch(`https://hp-api.onrender.com/api/characters/house/${slytherin}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar a API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            casas = data; // Armazenar a lista de alunos
            exibirCasas(casas); // Exibir os primeiros alunos
        })
        .catch(error => {
            console.error('Erro:', error);
        });

})
