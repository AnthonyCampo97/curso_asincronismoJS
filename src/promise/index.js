const promise = new Promise(function (resolve, reject) {
  resolve("hey!!");
});

const cows = 1; //Constante numerica
const countCows = new Promise(function (resolve, reject) {
  //Creacion Prmesa
  if (cows > 10) {
    //Operador condicional
    resolve(`We have ${cows} cows on the farm`); //Promesa Cumplida
  } else {
    reject("There is no cows on the farm"); //Promesa no cumplida
  }
});

countCows
  .then((result) => {
    //Promesa invocada
    console.log(result); //Imprime Resultado
  })
  .catch((error) => {
    //Imprime error Reject
    console.log(error);
  })
  .finally(() => console.log("Finally"));

//Ejecicio Clase
// En este desafío debes crear una función la cual produzca una espera en un tiempo específico y debe funcionar como una promesa.

// La función deberá recibir dos parámetros:

// time = el tiempo de espera
// message = el mensaje que debe imprimir despues del tiempo de espera
// Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

// La solución debería tener un input y output como los siguientes:

// Input

// delay(2000, "Hello after 2s")
// .then((message) => console.log(message))

// Output

// # after 2s
// "Hello after 2s"

//SOLUCIÖN
export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time);
  });
}
