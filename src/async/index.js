// Función async
// La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.
// Cuando se llama a una función async, esta devuelve un elemento Promise.
// Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. 
// Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

// Una función async puede contener una expresión await, 
// la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, 
// a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ?setTimeout(() => resolve('Asymc !!'),2000)
        : reject (new Error('Error!'));
    })
}

const anotherFn = async() =>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello !!');
}

console.log('Before');
anotherFn();
console.log('After');