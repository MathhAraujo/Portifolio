const imagens = [
    "arvore.jpeg",
    "projeto2.png"
]

const titulos = [
    "Projeto Arvore das Emoções",
    "Projeto API Loja de Quadrinhos"
]

const subTitulos = [
    "Desenvolvido para a cadeira de projetos 1",
    "Desenvolvido como desafio pessoal de aprendizado"
]

const resumo = [
    "Consiste numa árvore que se acende de acordo com as emoções de seus usuários, nos ajudando assim a acompanhar o estado mental da população.",
    "Consiste no desenvolvimento de uma API Rest utilizando Java, Spring e MySQL, baseado em um desafio técnico para vaga de estágios back-end."
]

const start = 0;
const last = imagens.length - 1;
let current = 0;

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", () =>{

    const imagemTag = document.getElementById("imagem");
    const tituloTag = document.getElementById("titulo");
    const subTituloTag = document.getElementById("subTitulo");
    const resumoTag = document.getElementById("resumo");
    current++;

    if(current > last){
        current = start;
    }

    imagemTag.src = imagens[current];
    tituloTag.innerHTML = titulos[current];
    subTituloTag.innerHTML = subTitulos[current];
    resumoTag.innerHTML = resumo[current];

})