import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { infoDiv } from './src/renders/info_div';
import { extraeListadoTareas } from './src/fetchers/extrae-listado-tareas';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Fatima FIX</h1>
    <div class="card">
      
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const element = document.querySelector('.card');
infoDiv( element );
extraeListadoTareas( element );


