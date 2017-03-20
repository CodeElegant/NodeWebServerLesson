/**
 *   @author Bates, Howard (bates4e@gmail.com)
 *   @version 0.0.1
 *   @summary Main || created: 03.17.2017
 *   @todo
 */

"use strict";

class Main {
     constructor() {
          Main.color = 0;
          Main.listenBox();
     }

     static listenBox() {
          document.getElementById('box').addEventListener('click', () => {
               if (this.color === 0) {
                    document.getElementById('box').style.backgroundColor = 'red';
                    Main.color = 1;
               } else {
                    document.getElementById('box').style.backgroundColor = 'blue';
                    Main.color = 0;
               }
          });
     }
}

(() => {
     new Main();
})();