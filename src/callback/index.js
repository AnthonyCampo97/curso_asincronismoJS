// Función Callback
// Una función de callback 
// es una función que se pasa a otra 
// función como un argumento, que luego 
// se invoca dentro de la función externa 
// para completar algún tipo de rutina o acción.

//Ejemplo 1 //

function sum(num1,num2){ //funcion 1, recibe como parametro 2 numeros
    return num1+num2; //retorna el resultado de la sumatoria
}

function calc(num1,num2,callback){ //funcion 2, recibe como parametro 2 numeros enteros ademas de la funcion suma
 return callback(num1,num2);//Callback de la funcion suma, lleva dos valores como parametro de la funcion 2
}

console.log(calc(2500,4700,sum)); //Ejecucion del codigo
//========================================================================================================================

//Ejmplo2

setTimeout(function (){ //setTimeout funcion programada 
 console.log('Hola JavaScript')//Ejecucion de funcion
},5000)//tiempo en segundos que retrasa la ejecucion

//Ejemplo 3

function gretting(name){ // Funcion de saludar con parametro String
    console.log(`Hola ${name}`); //Muestra en consola el parametro, ademas de una cadena concatenada HOLA
}
setTimeout(gretting,2500,'Tony')//ejecucion de Funcion TimeOut, con parametro CallBack "greting"

//=============================================================================================================================

//Ejercicio 1

function PruebaCallBack(){//funcion 1, Muestra cadena en consola
    console.log('Ejecucion Funcion 1');
}

setTimeout(PruebaCallBack,1500)//funcion 2 TimeOut con tiempo de ejeucion, llamado de callback funcion PruebaCallBack

//==========================================================================================================================================

//Ejercicio 2

function sum(num1,num2){ //funcion 1, recibe como parametro 2 numeros
    return console.log(num1+num2) //retorna el resultado de la sumatoria
}
setTimeout(sum,2500,4,8)//funcion 2 TimeOut con tiempo de ejeucion, llamado de callback funcion sum

//===================================================================================================================================================

//Ejercicio 3 Correr en Google chrome

function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

//Ejercicio Curso
export function runCode(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
  }

