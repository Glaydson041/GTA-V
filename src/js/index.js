/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
        
        Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima
        
        Passo 2 - pehgar o elemento dop conteúdo que precisa ser mostrado

        Passo 3 - pegar o clique do usuário no JS

        Passo 4 - quando o usuáro clicar, adiocionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido 
        
        Passo 1 - verificar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo pra ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});