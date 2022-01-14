function mmNivel2() {
    var pergunta = prompt ("1 - Usar sua super força para enfrenta-los \n 2 - Tenta uma conversa amigável para apaziguar tudo")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "mm3.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "mmGameOver2.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Usar sua super força para enfrenta-los \n 2 - Tenta uma conversa amigável para apaziguar tudo")
}
}
}