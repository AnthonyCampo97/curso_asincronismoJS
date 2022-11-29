
import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//Funcion para agregar un producto 

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response;
}


//Producto a agregar 
const data = {
  title: "New Product 28_11_22",
  price: 256325,
  description: "Vitacora Curso JS",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};


postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));

//Funcion para Editar un producto 
import fetch from "node-fetch";
const API_Update = "https://api.escuelajs.co/api/v1/products/340";

function postData(urlApi, data) {
    const response = fetch(urlApi, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response;
  }

  //Producto a editar

  const dataUpdate = {
    title: "Nuevo Producto 28_11_22",
    price: 250000,
    description: "Vitacora Curso JS",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  };

postData(`${API_Update}`, dataUpdate)
.then(response => response.json())
.then(data => console.log(data));

//Funcion para Eliminar un producto 
import fetch from "node-fetch";
const API_Delete = "https://api.escuelajs.co/api/v1/products/339";

function postData(urlApi) {
    const response = fetch(urlApi, {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
      //body: JSON.stringify(data)
    });
    return response;
  }
postData(`${API_Delete}`)
.then(response => response.json())
.then(data => console.log(data));