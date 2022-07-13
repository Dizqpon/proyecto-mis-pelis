import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Borrar from './modules/delete.js';
import buscador from './modules/buscador.js';


export default class App {
    constructor() {
       this.agregar = new Add();
       this.lista   = new List();
       this.storage = new Storage();
       this.borrar  = new Borrar(); 

        
    };
    load(){
        // Añadir peliculas
        this.agregar.peliGuardar();

        // Conseguir los datos de Localstorage
        const pelis = this.storage.getData();

        // Listar peliculas
        this.lista.show(pelis);

        // Borrar elemento

        // Buscar peliculas
        buscador();

        console.log('La aplicación se ha inicializado....');
    };
    
};


