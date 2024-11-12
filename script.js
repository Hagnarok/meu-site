// Seleciona o coração e as mensagens
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");

// Adiciona um evento de clique no coração
heart.addEventListener("click", () => {
    
    // Adiciona a nova animação de crescimento ao coração
    heart.classList.add("grow-animation");

    // Mostra a primeira mensagem depois de um pequeno atraso para coincidir com o fim da animação
    setTimeout(() => {
        message.classList.remove("hidden");
    }, 800); // 800 ms para coincidir com a duração da animação 'grow'

    // Mostra a segunda mensagem após um atraso maior
    setTimeout(() => {
        message2.classList.remove("hidden");
    }, 1600); // 1600 ms para permitir que a primeira mensagem apareça primeiro
});
