function btNivel3() {
    var pergunta = prompt ("1 - Coloca-los de volta em sua nave e explodi-la \n 2 - Coloca-los de volta em sua nave e mandar de volta para seu planeta")
    while (pergunta != 1 || pergunta != 2) {
    
if (pergunta == 1) {
    location.href = "batmanFinal.html"
    break
}
    
else if (pergunta == 2) {
    location.href = "batmanGameOver3.html"
    break
} 
else {
    alert("Tente novamente, escolha uma das opções.")
    pergunta = prompt ("1 - Coloca-los de volta em sua nave e explodi-la \n 2 - Coloca-los de volta em sua nave e mandar de volta para seu planeta")
}
}
} 