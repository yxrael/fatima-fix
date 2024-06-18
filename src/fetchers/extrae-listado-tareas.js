import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi("e379371bf34dfdf5e652ed194baca64b66acb670")



export const extraeListadoTareas = ( element ) => { 

    console.log('extrae listado');

    const contenido = document.createElement('div');

    api.getProjects()
    .then ( (projects) => projects.forEach( project => {
        const texto = document.createElement('p');
        texto.textContent = project.name;
        contenido.append( texto );     

    } ))
    .catch((error) => console.log(error));

    element.append( contenido );

 }

 // changes