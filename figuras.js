//codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("Los perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("el area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();
//codigo del triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
  //  "los lados del triangulo miden: "
    // + ladoTriangulo1 
     //+ "cm, " 
     //+ ladoTriangulo2 
     //+ "cm, " 
     //+ baseTriangulo 
     //+ "cm "
     //);
     //const alturaTriangulo = 5.5;
     //console.log("La altura del triangulo es de: " + alturaTriangulo);

     function perimetroTriangulo(lado1, lado2, base){
        return lado1 + lado2 + base;
     } 
     //console.log("Los perimetro del triangulo es: " + perimetroTriangulo + "cm");

     function areaTriangulo(base, altura){
        return (base*altura) / 2;
     }
     //console.log("el area del triangulo es: " + areaTriangulo + "cm2");

     console.groupEnd();

     //codigo de circulo
     console.group("circulos");

     //radio
     //const radioCirculo = 4;
    //console.log("el radio del circulo es: " + radioCirculo + "cm");
     //Diametro
     function diametroCirculo(radio){
        return radio * 2;
     } 
     //console.log("el diametro del circulo es: " + diametroCirculo + "cm");
     //PI
     const PI = Math.PI;
     //console.log("el PI es: " + PI );

     //Cicunferencia
     function perimetroCirculo(radio){
         const diametro = diametroCirculo(radio);
         return diametro * PI;
     } 
    //console.log("el perimetro es: " + perimetroCirculo + "cm");
     //Area
     function areaCirculo(radio){
         return (radio * radio ) * PI;
     }
     

     console.groupEnd();

     //Aqui interactuamos con el HTML
     function calcularPerimetroCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
     }

     function calcularAreaCuadrado() {
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);
    }
//////triangulo
     function calcularPerimetroTriangulo() {
        const input1 = document.getElementById("ladoA");
        const value1 = Number(input1.value);
        
        const input2 = document.getElementById("ladoB");
        const value2 = Number(input2.value);
        const input3 = document.getElementById("base");
        const value3 = Number(input3.value);

        const perimetro = perimetroTriangulo(value1, value2, value3);
        alert(perimetro);
    }

    function calcularAreaTriangulo(){
        const input4 = document.getElementById("altura");
        const value4 = Number(input4.value);

        const input5 = document.getElementById("base1");
        const value5 = Number(input5.value);

        const areaT = areaTriangulo(value4, value5);
        alert(areaT);
    }
    //circulo

    function calcularDiametroCirculo(){
        const input = document.getElementById("radio");
        const value = Number(input.value);

        const diametroC = diametroCirculo(value);
        alert(diametroC);
    }

    function calcularPerimetroCirculo(){
        const input = document.getElementById("radio");
        const value = Number(input.value);

        const perimetroC = perimetroCirculo(value);
        alert(perimetroC);
    }

    function calcularAreaCirculo(){
        const input = document.getElementById("radio");
        const value = Number(input.value);

        const areaC = areaCirculo(value);
        alert(areaC);
    }