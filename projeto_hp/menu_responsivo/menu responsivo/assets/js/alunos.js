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
    let alunos; // Definindo a variável alunos

    // Função para exibir os alunos na tela
    function exibirAlunos(alunos, classeSelecionada) {
        const elementoAlunos = document.getElementById('alunos');
        elementoAlunos.innerHTML = ''; // Limpa os alunos anteriores

        // Filtra os alunos de acordo com a classe selecionada
        const alunosFiltrados = classeSelecionada !== 'all' ? alunos.filter(aluno => aluno.house === classeSelecionada) : alunos;

        // Itera sobre os próximos alunos
        for (let i = startIndex; i < startIndex + 10 && i < alunosFiltrados.length; i++) {
            const aluno = alunosFiltrados[i];
            const novoAluno = document.createElement('div');
            novoAluno.classList.add('alunos-box');

            const imagem = document.createElement('img');
            if (aluno.image) {
                imagem.src = aluno.image;
            } else {
                // Se o aluno não tiver uma imagem, usamos uma imagem branca como padrão
                imagem.src = "https://cdn-icons-png.flaticon.com/512/1695/1695213.png"; 
            }
            imagem.alt = aluno.name;

            const nome = document.createElement('h2');
            nome.textContent = aluno.name;

            novoAluno.appendChild(imagem);
            novoAluno.appendChild(nome);

            elementoAlunos.appendChild(novoAluno);
        }
    }

    // Variável para rastrear o índice do primeiro aluno a ser exibido
    let startIndex = 0;

    // Função para lidar com o clique no botão de próxima página
    const proximaPaginaBtn = document.getElementById('proxima-pagina');
    if (proximaPaginaBtn) {
        proximaPaginaBtn.addEventListener('click', () => {
            startIndex += 10; // Incrementa o índice do primeiro aluno
            exibirAlunos(alunos, document.getElementById('classe').value); // Exibe os próximos alunos com a classe selecionada
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
            exibirAlunos(alunos, document.getElementById('classe').value); // Exibe os alunos anteriores com a classe selecionada
        });
    } else {
        console.error('Elemento com ID "pagina-anterior" não encontrado.');
    }

    // Adicione o evento de mudança ao elemento select
    const selectClasse = document.getElementById('classe');
    if (selectClasse) {
        selectClasse.addEventListener('change', () => {
            startIndex = 0; // Reinicia o índice do primeiro aluno ao alterar a classe
            exibirAlunos(alunos, selectClasse.value); // Exibe os alunos da classe selecionada
        });
    } else {
        console.error('Elemento com ID "classe" não encontrado.');
    }

    // Fazer a requisição à API e chamar a função para exibir os alunos
    fetch('https://hp-api.onrender.com/api/characters/students')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar a API: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            alunos = data; // Armazenar a lista de alunos
            exibirAlunos(alunos, 'all'); // Exibir os primeiros alunos
        })
        .catch(error => {
            console.error('Erro:', error);
        });

});
