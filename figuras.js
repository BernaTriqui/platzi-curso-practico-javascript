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