var nombre = "Lucas";
let edad1 = 30;
const boolean = true; //false

// -----------------------------------

// let suma = 1 + 2;
// console.log(suma);

let resta = 4 - 2; //* y /
// console.log(resta);

let comparar =  5 !== "cinco";
// console.log(comparar)

let logicos = ( 7 < 6 ) && (7 < 8 );
// console.log(logicos)

// ------------------------------------

let edad = 16;

if(edad >= 18){
    // console.log("es mayor de edad");
}
else if(edad >= 17){
    // console.log("No sos mayor, pero podes ingresar acompañado")
}
else{
    // console.log("es menor de edad");
}

// for
for(let i = 0; i < 5 ; i ++){
    // console.log("Iteración " + i)
}

// while
let contador = 0;
while(contador < 5 ){
    // console.log(`Contando: ${contador}`);
    contador++;
}

// funciones
function saludar(nombre){
   return ("Hola, " + nombre )
}

// console.log(saludar("Lucas"));


// function suma (num1, num2){
//     return num1 + num2
// }

// let resultado = suma(5, 10)
// console.log(resultado)

let suma = (num1, num2) => {return num1 + num2}

// console.log(suma(true, false))

// array
const frutas = ["manzana", "pera", "platano"]
frutas
let frutas1 = frutas[0]
console.log(frutas1)