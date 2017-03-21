//  @todo

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