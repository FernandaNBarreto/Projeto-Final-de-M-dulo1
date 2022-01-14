function btNivel2() {
    var pergunta = prompt ("1 - Sua arma nova que paralisa \n 2 - Arma de fogo")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "batman3.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "batmanGameOver2.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Sua arma nova que paralisa \n 2 - Arma de fogo")
}
}
} 