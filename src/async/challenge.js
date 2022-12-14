import fetch from "node-fetch"; 

const API = 'https://api.escuelajs.co/api/v1'; //Se agrega el link de la API a consultar

async function fetcData(urlApi){  //funcion para convertir los datos consultados en formato JSON
    const response = await fetch(urlApi);
    const data=(await response).json();
    return data; //Retorna el resultado de la consulta
}

const anotherFunction = async (urlApi) => { //funcion para administrar los datos consultados en formato JSON
    try {
        const products = await fetcData(`${urlApi}/products`); //Lista todos los productos consultados en formato JSON
        const product = await fetcData(`${urlApi}/products/${products[0].id}`); //Muestra el producto en el campo cero del Array 
        const category = await fetcData(`${urlApi}/categories/${product.category.id}`); // Muestra la categoria del producto consultado 

        console.log(products); //Mostrar consulta
        console.log(product.title); //Mostrar consulta
        console.log(category.name); //Mostrar consulta
    }catch {
        console.error(error); //Muestra error si se presenta en el codigo
    }
}

anotherFunction(API); //Ejecucion de la funcion