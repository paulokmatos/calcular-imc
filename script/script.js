
function calcular(){
//Obter os Dados do usuário
let peso = document.getElementById('Peso').value;
let altura = document.getElementById('altura').value;
//Transformar as strings em números reais e substituir virgulas por ponto
peso = peso.replace(/,/g, '.'); 
peso = parseFloat(peso);

altura = altura.replace(/,/g, '.') 
altura = parseFloat(altura);

//calcular IMCs

const imc = peso / (altura * altura);

const paragrafo = document.getElementById("paragrafo");

if (imc < 5){
    paragrafo.innerHTML ="Por Favor Adcione ponto ou virgula na altura";

}else{
    if( imc >= 18.5 && imc <= 24.9){
        paragrafo.innerHTML = "Seu IMC é de: " + imc.toFixed(1) + " seu peso está normal";
        
    }
    if ( imc < 18.5){
        paragrafo.innerHTML = "Seu IMC é de: " + imc.toFixed(1) + ", e você está abaixo do Peso ideal";
    }
    if (imc >= 25 && imc <= 29.9) {
        paragrafo.innerHTML = "Seu IMC é de: " + imc.toFixed(1) + ", e você está Acima do Peso ideal";
    }
    if (imc >= 30 && imc < 39.9) {
        paragrafo.innerHTML = "Seu IMC é de: " + imc.toFixed(1) + ", e você está com Obesidade";
    }
    if (imc >= 40) {
        paragrafo.innerHTML = "Seu IMC é de: " + imc.toFixed(1) + ", e você sofre de Obesidade Gave, por favor procure um médico o mais rápido possível";
    }
}



}
//Limitar Numero de Caracteres

