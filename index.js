//Declaração de variáveis. 
//A primeira variável (string) é para o nome fictício do personagem e a segunda variável (number) é para armazenar o valor total da experiência do personagem.
//Caso o valor da segunda variável não seja um valor numérico, será apresentada uma mensagem de "operação inválida" ao final da compilação do código. 
let nomeHeroi = "Lulu"
let pontosDeExperiencia = "10000"

//Verifica em qual nível está o personagem de acordo com as condições apresentadas e o valor numérico armazenado na variável pontosDeExperiencia.
//Após a verificação, se os valores das variáveis forem válidos, será apresentado uma mensagem de saída com o nome e o nível de classificação do personagem. 
if (pontosDeExperiencia < 1000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ferro")
} else if (pontosDeExperiencia >= 1001 && pontosDeExperiencia <= 2000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Bronze")

} else if (pontosDeExperiencia >= 2001 && pontosDeExperiencia <= 5000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Prata") 

} else if (pontosDeExperiencia >= 5001 && pontosDeExperiencia <= 7000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ouro")

} else if (pontosDeExperiencia >= 7001 && pontosDeExperiencia <= 8000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Platina")

} else if (pontosDeExperiencia >= 8001 && pontosDeExperiencia <= 9000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Ascendente")

} else if (pontosDeExperiencia >= 9001 && pontosDeExperiencia <= 10000) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Imortal")

} else if (pontosDeExperiencia >= 10001) {
    console.log("O herói de nome " + nomeHeroi + " está no nível Radiante")

} else {
    console.log("está operação não pode ser realizada")
}

//fim do código

    
