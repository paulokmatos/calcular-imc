
function meuEscopo() {

    const form = document.getElementById('form');
    const resposta = document.getElementById('resposta')


    form.addEventListener('submit', event => {
        event.preventDefault()
        const peso = document.getElementById('peso').value
        const altura = document.getElementById('altura').value



        let alturaConvertida = parseFloat(altura.replace(/,/g, '.'))
        let pesoVerificado = parseFloat(peso);
        let imc = calcIMC(pesoVerificado, alturaConvertida);


        validarDados(pesoVerificado, alturaConvertida)

    })

    function resultadoIMC(imc) {
        if (imc <= 18.4) {
            return resposta.innerHTML = `<p class="success">Seu IMC é de ${imc} e você está abaixo do Peso ideal</p>`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            return resposta.innerHTML = `<p class="success">Seu IMC é de ${imc} e você está no Peso ideal</p>`;
        } else if (imc >= 25 && imc <= 29.9) {
            return resposta.innerHTML = `<p class="success">Seu IMC é de ${imc} e você está com Sobrepeso</p>`;
        } else if (imc >= 30 && imc <= 34.9) {
            return resposta.innerHTML = `<p class="success">Seu IMC é de ${imc} e você está com Obesidade Grau 1</p>`;
        } else if (imc >= 35 && imc <= 39.9) {
            return resposta.innerHTML = `<p class="success">Seu IMC é de ${imc} e você está com Obesidade Grau 2</p>`;
        } else if (imc >= 75) {
            return resposta.innerHTML = `<p class="danger" style="text-align: center;">Ops! acho que você acidentalmente inseriu o peso
        <br><strong> DA SUA MÃE</strong></p>`;
        } else if (imc >= 40) {
            return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está com Obesidade Grau 3</p>`;
        }


        // switch (imc) {
        //     case imc <= 18.4: 
        //        return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está abaixo do Peso ideal</p>`;
        //     case imc >= 18.5 && imc <= 24.9: 
        //         return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está no Peso ideal</p>`;
        //     case imc >= 25 && imc <= 29.9: 
        //         return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está com Sobrepeso</p>`;
        //     case imc >= 30 && imc <= 34.9 :
        //         return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está com Obesidade Grau 1</p>`;
        //     case imc >= 35 && imc <= 39.9: 
        //         return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está com Obesidade Grau 2</p>`;
        //     case imc >= 40 : 
        //         return resposta.innerHTML = `<p class="succes">Seu IMC é de ${imc} e você está com Obesidade Grau 1</p>`;

        // }



    }

    function validarDados(peso, altura) {
        if (isNaN(peso) && isNaN(altura)) {
            resposta.innerHTML = '<p class="danger">Insira um Peso e Altura Válidos</p>'
        } else if (isNaN(peso) && !isNaN(altura)) {
            resposta.innerHTML = '<p class="danger">Insira um Peso Válido</p>';
        } else if (!isNaN(peso) && isNaN(altura)) {
            resposta.innerHTML = '<p class="danger">Insira uma Altura Válida</p>';
        } else if (!isNaN(peso) && !isNaN(altura)) {
            resultadoIMC(imc)
        }
    }



    function calcIMC(peso, altura) {
        imc = (peso / altura ** 2).toFixed(1)
        imc = parseFloat(imc)
        return imc;
    }

}

meuEscopo();
