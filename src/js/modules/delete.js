import Storage from "./storage.js";
import List from "./list.js";

export default function() {
    // Crear objetos
    const storage = new Storage();
    const list = new List();

    // Datos disponibles
    let pelisStorage = storage.getData();
    let pelisViewed  = document.querySelectorAll('.peli-item');

    // Recorrer peliculas mostradas
    pelisViewed.forEach(peli => {
        // Capturar el boton
        let deleteBtn = peli.querySelector('#borrarBtn');
        //Aplicar el evento
        deleteBtn.onclick = function() {
            //consegir el id de la pelicula que quiero borrar
            const peliId = this.getAttribute('data-id');
            // Filtrar el array para que elimine la que no quiero
            const newPelisStored = pelisStorage.filter((peli) => peli.id !== parseInt(peliId));
            // Actualizar datos en el localstorage
            storage.save(newPelisStored);


            list.show(newPelisStored);
        }
    });
}