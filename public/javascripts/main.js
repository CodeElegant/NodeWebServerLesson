//   @todo

"use strict";

class main {
     constructor() {
          main.prepApp();
          new EventHandler();
     }

     static prepApp() {
          document.getElementById('result').style.display = 'none';
          document.getElementById('log').style.display = 'none';
          document.getElementById('login').style.display = 'block';
     }
}

class EventHandler {
     constructor() {
          this.handleContinue();
          this.handleEnterLog();
          this.handleNewLog();
          this.user = null;
     }

     handleContinue() {
          document.getElementById('continue').addEventListener('click', () => {
               if (document.getElementById('getEmail').value === '' || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('getEmail').value)) {
                    alert('You must provide your proper email address to continue.');
               } else {
                    this.performAjax('XMLHttpRequest0', JSON.stringify(document.getElementById('getEmail').value), (response) => {
                         if (response === 'false') {
                              alert('You must provide your proper email address to continue.');
                         } else {
                              this.user = JSON.parse(response);
                              document.getElementById('login').style.display = 'none';
                              document.getElementById('result').style.display = 'none';
                              document.getElementById('log').style.display = 'block';
                              document.getElementById('name').innerHTML = `${this.user.firstName} ${this.user.lastName}`;
                         }
                    });
               }
          });
     }

     handleEnterLog() {
          document.getElementById('enterLog').addEventListener('click', () => {
               let gameHits = Number(document.getElementById('gameHits').value);
               let gameRuns = Number(document.getElementById('gameRuns').value);
               if (gameHits > 0 && gameHits < 99 && gameRuns > 0 && gameRuns < 99) {
                    document.getElementById('log').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('result').style.display = 'block';
                    let data = new FormData(document.querySelector('#logData'));
                    data.append('email', this.user.email);
                    this.performAjax('XMLHttpRequest1', data);
               } else {
                    alert(`Invalid game data, please try again.`);
               }
          });
     }

     handleNewLog() {
          document.getElementById('newLog').addEventListener('click', () => {
               document.getElementById('logData').reset();
               document.getElementById('login').style.display = 'none';
               document.getElementById('result').style.display = 'none';
               document.getElementById('log').style.display = 'block';
          });
     }

     performAjax(requestNum, sendToNode, callback) {
          let bustCache = '?' + new Date().getTime();
          const XHR = new XMLHttpRequest();
          XHR.open('POST', document.url + bustCache, true);
          XHR.setRequestHeader('X-Requested-with', requestNum);
          XHR.send(sendToNode);
          XHR.onload = () => {
               if (XHR.readyState == 4 && XHR.status == 200 && callback) {
                    return callback(XHR.responseText);
               }
          };
     }
}

window.addEventListener('load', () => {
     new main();
});