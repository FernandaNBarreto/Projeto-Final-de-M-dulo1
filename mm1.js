function mmNivel1() {
    var pergunta = prompt ("1 - primeira opção \n 2. Segunda opção")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "./mm2.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "mmGameOver1.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
}
}
}   