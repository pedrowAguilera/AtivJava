function retangulo(){
    let m=Number(prompt("Informe o valor da largura do retangulo"))
    let v=Number(prompt("informe o valor do comprimento do retangulo"))
    let f=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=m*v*f
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('a_ret').innerHTML="O resultado do volume do Retângulo é  "+resultado+"m²"
    document.getElementById('a_ret').style.color="red";
}

function triangulo(){
    let r=Number(prompt("Informe o valor da largura do retangulo"))
    let y=Number(prompt("informe o valor do comprimento do retangulo"))
    let x=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=r*y*x
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('b_ret').innerHTML="O resultado do volume do Triângulo é  "+resultado+"m²"
    document.getElementById('b_ret').style.color="red";
}

function circulo(){
    let r=Number(prompt("Informe o valor da largura do retangulo"))
    let y=Number(prompt("informe o valor do comprimento do retangulo"))
    let x=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=r*y*x
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('c_ret').innerHTML="O resultado do volume do Circulo é  "+resultado+"m²"
    document.getElementById('c_ret').style.color="red";
}

function trapezio(){
    let r=Number(prompt("Informe o valor da largura do retangulo"))
    let y=Number(prompt("informe o valor do comprimento do retangulo"))
    let x=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=r*y*x
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('d_ret').innerHTML="O resultado do volume do Trapézio é  "+resultado+"m²"
    document.getElementById('d_ret').style.color="red";
}

function losango(){
    let r=Number(prompt("Informe o valor da largura do retangulo"))
    let y=Number(prompt("informe o valor do comprimento do retangulo"))
    let x=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=r*y*x
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('e_ret').innerHTML="O resultado do volume do Losango é  "+resultado+"m²"
    document.getElementById('e_ret').style.color="red";
}