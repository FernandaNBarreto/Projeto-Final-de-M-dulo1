function mmNivel3() {
    var pergunta = prompt ("1 - Primeira opção \n 2. Segunda opção")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "mmFinal.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "mmGameOver3.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Primeira opção \n 2. Segunda opção")
}
}
}