const promise = new Promise(function (resolve, reject) {
  resolve("hey!!");
});

const cows = 1; //Constante numerica
const countCows = new Promise (function (resolve, reject){ //Creacion Prmesa
    if(cows>10){ //Operador condicional
        resolve(`We have ${cows} cows on the farm`); //Promesa Cumplida
    }else {
        reject ("There is no cows on the farm"); //Promesa no cumplida
    }
});

countCows.then((result)=>{ //Promesa invocada
    console.log(result); //Imprime Resultado
}).catch((error)=>{ //Imprime error Reject
    console.log(error)
}).finally(()=> console.log('Finally'))
