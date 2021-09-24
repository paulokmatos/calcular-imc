
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

        const casosPossiveis = [
            {
                valor: imc <= 18.4,
                mensagem: `Seu IMC é de ${imc} e você está abaixo do Peso ideal`,
                classe: 'success'
            },
            {
                valor: imc >= 18.5 && imc <= 24.9,
                mensagem: `Seu IMC é de ${imc} e você está com peso Normal`,
                classe: 'success'
            },
            {
                valor: imc >= 25 && imc <= 29.9,
                mensagem: `Seu IMC é de ${imc} e você está com Sobrepeso`,
                classe: 'success'
            },
            {
                valor: imc >= 30 && imc <= 34.9,
                mensagem: `Seu IMC é de ${imc} e você está com Obesidade Grau 1`,
                classe: 'success'
            },
            {
                valor: imc >= 35 && imc <= 39.9,
                mensagem: `Seu IMC é de ${imc} e você está com Obesidade Grau 2`,
                classe: 'success'
            },
            {
                valor: imc >= 40,
                mensagem: `Seu IMC é de ${imc} e você está com Obesidade Grau 3`,
                classe: 'success'
            },
            {
                valor: imc >= 60,
                mensagem: `Longe de mim duvidar de você, mas você tem certeza que os dados estão corretos?`,
                classe: 'warning'
            }

        ]

        casosPossiveis.forEach((caso) => {
            if (caso.valor) {
                return resposta.innerHTML = `<p class="${caso.classe}">${caso.mensagem}</p>`
            }
        })

    })

    function validarDados(peso, altura) {
        validadores = [
            {
                valor: isNaN(peso) && isNaN(altura),
                mensagem: 'Insira um Peso e Altura Válidos',
                classe: 'danger'
            },
            {
                valor: isNaN(peso) && !isNaN(altura),
                mensagem: 'Insira um Peso Válido',
                classe: 'danger'
            },
            {
                valor: !isNaN(peso) && isNaN(altura),
                mensagem: 'Insira uma Altura Válida',
                classe: 'danger'
            },
        ]


        validadores.forEach((validador) => {
            if (validador.valor) {
                resposta.innerHTML = `<p class="${validador.classe}">${validador.mensagem}</p>`
            }
        })
    }

    function calcIMC(peso, altura) {
        imc = (peso / altura ** 2).toFixed(1)
        imc = parseFloat(imc)
        return imc;
    }

}

meuEscopo();
