import Storage from "./storage.js";
import List from "./list.js";


export default class Add {


    constructor() {
        // Crear objetos
        this.storage = new Storage();
        this.list = new List();

        // Conseguir los elementos del DOM que vamos a utilizar
        this.titulo      = document.querySelector('#tituloAdd');
        this.description = document.querySelector('#description');
        this.agregarPeli = document.querySelector('#guardar');
        
    }
    
    peliGuardar(){
        this.agregarPeli.onclick = (e) => {
            e.preventDefault();

            // Conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();

            // Datos a guardar
            let titulo      = this.titulo.value;
            let description = this.description.value;

            // Pequeña validación
            if (titulo != '' || description != ''){
                // Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    titulo,
                    description
                };

                // Añadir al array de objetos
                pelis.push(peli);

                // Guardar datos en Local Storage
                this.storage.save(pelis);

                // Actualizar el listado
                this.list.show(pelis);
            } else {
                alert('Debes meter datos en los campos de titulo y descripción');
            }

            
            return false;
        };
    };
}

