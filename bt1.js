function btNivel1() {
    var pergunta = prompt ("1 - Fazer uma aproximação com seu carro invisível \n 2 - Chamar Super Homem e Mulher Maravilha para ajuda-lo a criar uma estratégia")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "batman2.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "batmanGameOver1.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Fazer uma aproximação com seu carro invisível \n 2 - Chamar Super Homem e Mulher Maravilha para ajuda-lo a criar uma estratégia")
}
}
} 