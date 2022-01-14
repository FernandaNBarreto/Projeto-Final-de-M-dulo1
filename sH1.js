function sHNivel1() {
    var pergunta = prompt ("1 - Usa sua visão de raio X \n 2 - Usa sua super audição")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "sHomem2.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "sHomemGameOver1.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Usa sua visão de raio X \n 2 - Usa sua super audição")
}
}
} 