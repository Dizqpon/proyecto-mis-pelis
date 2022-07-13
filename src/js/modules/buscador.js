import List from './list.js';
import Storage from './storage.js';

export default function () {
    // Crear los objetos
    const storage = new Storage();
    const list = new List();

    // Conseguir los elementos del DOM
    let contenido = document.querySelector('#contenido');
    let buscarBtn = document.querySelector('#buscar');


    // Aplicar el evento click
    buscarBtn.onclick = (e) => {
        e.preventDefault();
        // Conseguir el valor del input
        let buscar = document.querySelector('#buscarInput').value;  
        // Conseguir los datos de las peliculas
        let pelisStorage = storage.getData();

        // Aplicar filtro
        let pelisFiltradas = pelisStorage.filter(peli => peli.titulo.toLowerCase().includes(buscar.toLowerCase()));
        // Mostrar las peliculas filtradas
        if (pelisFiltradas.length > 0) {
           contenido.innerHTML = '<div><h2>No se ha encontrado ninguna peli con ese nombre</h2></div>';
        }else {
            list.show(pelisStorage);
        }
                                  

    };
}