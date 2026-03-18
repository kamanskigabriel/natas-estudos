
//function exercicio2() {}
//const buttonExercicio2 = document.getElementById("exercicio2")
//buttonExercicio2.addEventListener('click', () => { exercicio2() })
function exercicio2() {
    const valorHora = Number(prompt("Digite o valor da hora:"))
    const horasTrabalhadas = Number(prompt("Digite as horas trabalhadas:"))
    const resultado = valorHora * horasTrabalhadas
    alert("Seu salario é: " + resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })

function exercicio3() {
    const peso1 = Number(prompt("Digite o peso 1º"))
    const peso2 = Number(prompt("Digite o peso 2º"))
    const peso3 = Number(prompt("Digite o peso 3º"))
    const peso4 = Number(prompt("Digite o peso 4º"))
    const peso5 = Number(prompt("Digite o peso 5º"))

    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    alert(`A media dos pesos ${resultado}`)
}
const buttonExercicio3 = document.getElementById("exercicio3")
buttonExercicio3.addEventListener('click', () => { exercicio3() })

function exercicio4() {
    const celcios = Number(prompt("ponha os celcios"))
    alert((9 * celcios + 160) / 5) = Number
}
const buttonExercicio4 = document.getElementById("exercicio4")
buttonExercicio4.addEventListener('click', () => { exercicio4() })

function exercicio5() {
    const milhas = Number(prompt("Colocar milhas"))

    alert(milhas * 1.60934)
}
const buttonExercicio5 = document.getElementById("exercicio5")
buttonExercicio5.addEventListener('click', () => { exercicio5() })

function exercicio6() {
    const segundos = Number(prompt("Colocar segunsdos"))
    alert(segundos * 60)
    alert(1 * 60)
    alert(segundos / 60)
}
const buttonExercicio6 = document.getElementById("exercicio6")
buttonExercicio6.addEventListener('click', () => { exercicio6() })

function exercicio7() {
    const Kilometros = Number(prompt("Colocar Km"))
    const Metros = Kilometros * 1000
    const Centimetros = Metros * 100
    alert(Kilometros)
    alert(Metros)
    alert(Centimetros)
}
const buttonExercicio7 = document.getElementById("exercicio7")
buttonExercicio7.addEventListener('click', () => { exercicio7() })


function exercicio8() {
    const Numero = Number(prompt("Númmero"))
    alert(Numero * 0)
    alert(Numero * 1)
    alert(Numero * 2)
    alert(Numero * 3)
    alert(Numero * 4)
    alert(Numero * 5)
    alert(Numero * 6)
    alert(Numero * 7)
    alert(Numero * 8)
    alert(Numero * 9)
    alert(Numero * 10)
}
const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })

function exercicio9() {
    const nota1 = Number(prompt("Nota 1º"))
    const nota2 = Number(prompt("Nota 2º"))
    const nota3 = Number(prompt("Nota 3º"))

    const media = (nota1 + nota2 + nota3) / 3
    console.log(media)

    if (media < 3) {
        alert("horrivel")
    } else if (media >= 5 && media <= 8) {
        alert("Quase lá")
    } else {
        alert("Essa nota não existe")
    }

}
const buttonexercicio9 = document.getElementById("exercicio9")
buttonexercicio9.addEventListener('click', () => { exercicio9() })

//function buttonexercicioX() {
//}
//const buttonexercicio = document.getElementById("exercicio")
//buttonexercicio.addEventListener('click', () =>{exercicio()})

function exercicio10() {
    //Peça o sexo da pessoa (H para homem, M para mulher) e a altura. Use as fórmulas para calcular o peso ideal
    //Homens: (72.7 × altura) - 58
    //Mulheres: (62.1 × altura) - 44.7
    const sexo = prompt("Sexo H/M")
    const peso = Number(prompt("Altura"))

    if (sexo === "H") {
        alert("Altura ideal: " + (72.7 * peso - 58))
    }
    else if (sexo === "M") {
        alert("Altura ideal é: " + (62.1 * peso - 44.7))
    }

}
const buttonexercicio10 = document.getElementById("exercicio10")
buttonexercicio10.addEventListener('click', () => { exercicio10() })
