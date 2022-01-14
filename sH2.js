function sHNivel2() {
    var pergunta = prompt ("1 - Usar sua superforça \n 2 - Usar seu super sopro")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "sHomem3.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "sHomemGameOver2.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Usar sua superforça \n 2 - Usar seu super sopro")
}
}
} 