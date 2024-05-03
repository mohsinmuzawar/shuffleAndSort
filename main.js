import './style.css';
import { setupShuffle, setupSort, generateShuffle } from './modules/shuffle.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h2>Shuffle and Sort</h2>
    <div id="main">  
      <div id="boxes">

      </div>
      <div id="actions">
        <button id="shuffle" type="button">SHUFFLE</button>
        <button id="sort" type="button">SORT</button>
      </div>
      <div class="footer">
      Shuffle and sort by Mohsin Muzawar
      </div>
    </div>
  </div>
`;
generateShuffle(document.getElementById('#boxes'), false);
setupShuffle(document.querySelector('#shuffle'), 9);
setupSort(document.querySelector('#sort'), 9);
