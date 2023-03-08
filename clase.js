
console.log('hello word'); //imprimir en consola 
console.log(Math.random());
let edad = "20";
let age=21;
let menssenger ='hello word';
var men ='iq';

const moneda ="COP";
const num_columnas = 4;

console.log(edad.length);

let verdadero=true;
if(age ==20){
    console.log(edad.length);
}else{
    verdadero=false;

}
console.log(verdadero);


const  hola= function(){
    return "hola"
}

// Esta es la mas utilizada en javascript 
const suma = (n1,n2)=>{
    return n1+n2;
}
let sumatoria= suma(age,8);
console.log("El resultado es: " + " "+ sumatoria);

const mult = num =>{
    return num*2;
}
let res=mult(3);
console.log(res);

/*funcion 1*/ 
const funt1 = (n1,n2,n3)=>{
        return (n1*n2)/n3
}

let resultado_estudiante=funt1(2,2,1);
console.log(resultado_estudiante);

/*funcion 2*/ 
const funt2 =num =>{
    num1=Math.sqrt(num)
    return num1/2;
}
let resultado_dos=funt2(6);
console.log(resultado_dos);

const funt3=()=>{
    
  return "hola";
}

let resultado_tres=funt3();
console.log(resultado_tres);
//para java esto es un pbjeto
let arreglo=[1,2,3,4,5,6];
//agregra un elemento 
arreglo.push(8)

console.log(arreglo);
//Saca el ultimo elemento 
arreglo.pop();
console.log(arreglo);

//funt 4
let vector=[1,2];
const funt4 =vector =>{
     vector.push(14);
    return vector;
}
let resultado_cuatro=funt4(vector);
console.log(resultado_cuatro);