import deleteOfList from './delete.js';
import edit from './edit.js';

export default class List {
    constructor(){
        this.contenido = document.querySelector('#contenido'); 
    }

    peliTemplate(peli){
        return `
        <article class="peli-item" id='peli-${peli.id}'>
                <h3 class="title">${peli.titulo}</h3>
                <p class="description">${peli.description}</codeku></p>
                <button class="edit" id='editBtn' data-id='${peli.id}'>Editar</button>
                <button class="delete" id='borrarBtn' data-id='${peli.id}'>Borrar</button>
        </article>
        `
    }

    show(pelis){
        // Vaciar DOM del contenedor principal
        this.contenido.innerHTML = '';
        // Recorrer y mostrar todos los elementos del localstorage
        pelis.forEach(peli => {
            this.contenido.innerHTML += this.peliTemplate(peli);
        });
        // Funccionalidad botones de borrado
        deleteOfList();

        // Funccionalidad botones de edición
        edit();
    };
};