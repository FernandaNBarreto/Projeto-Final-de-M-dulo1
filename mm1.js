function mmNivel1() {
    var pergunta = prompt ("1 - Desviar do sistema de segurança com sua super velocidade \n 2. Entrar pela porta dos fundos onde não tem ninguém")
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
    pergunta = prompt ("1 - Primeira opção \n 2. Segunda opção")
}
}
}   