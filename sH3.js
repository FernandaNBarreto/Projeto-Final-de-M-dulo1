function sHNivel3() {
    var pergunta = prompt ("1 - Suspensão dos sentidos \n 2 - Visão de calor")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "sHomemFinal.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "sHomemGameOver3.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("Suspensão dos sentidos \n 2 - Visão de calor")
}
}
} 