import List from './list.js';
import Storage from './storage.js';


export default function(){
    //Crear los objetos 
    const storage = new Storage();
    const list = new List();

    // Conseguir los datos de las peliculas
    let pelisStorage   = storage.getData();
    let pelisMostradas = document.querySelectorAll('.peli-item');

    // Recorrer las peliculas mostradas
    pelisMostradas.forEach(peli => {
        // Seleccionar el boton de editar
        let editBtn = peli.querySelector('#editBtn');
        // Asignar un evento click
        editBtn.onclick = function() {
            // Conseguir id de la pelicula a editar
           const peliId = parseInt(this.getAttribute('data-id'));

            // Quitar botones antiguos
            editBtn.remove();
            peli.querySelector('#borrarBtn').remove();


            // Añadir un trozo de html debajo del boton
             let cachoHtml = `
             <div class='editForm'>
                <h3 class='titulo'>Editar Peli</h3>
                <form>
                    <input type='text' class= 'editatTitulo' placeholder='Titulo' value='${peli.querySelector('.title').innerHTML}'>
                    <textarea class='editatDescripcion' placeholder='Descripcion'>${peli.querySelector('.description').innerHTML}</textarea>
                    <input type='submit' class='submitEditar' value='Guardar'>
                </form>
            </div>

             `
            peli.innerHTML += cachoHtml;

            // Seleccionar el boton de actualizar
            let editarSubmit = peli.querySelector('.submitEditar');

            // Aplicar el evento click
            editarSubmit.onclick = function(e) {
                e.preventDefault();
                // Buscar el indice de la pelicula a actualizar
                let index = pelisStorage.findIndex(peli => peli.id === parseInt(peliId));
                
                // Guardar objeto dentro de ese indice
                pelisStorage[index] = {
                    id: peliId,
                    titulo: peli.querySelector('.editatTitulo').value,
                    description: peli.querySelector('.editatDescripcion').value
                };
                // Guardar en el localstorage
                storage.save(pelisStorage);
                // Actualizar la lista
                list.show(pelisStorage);
                return false;
            }


                // Actualizar el localstorage

                // Volver a mostrar el listado
        };
        
    });

        
};