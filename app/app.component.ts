import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Jeux des allumettes';

  nbToken;
  token: Allumettes[] = [];
  statusPlayer;
  statusGame = 'unstarted';

  constructor() {
    //   par defaut, l'ordinateur commence
    this.statusPlayer = 'computer';
    this.init();
  }

  init() {

    this.token = [];
    // nb aleatoire de token (un minimum de 12 pour une partie interessante)
    this.nbToken = Math.round(Math.random() * 10) + 12;

    for (let i = 0; i < this.nbToken; i++) {
        this.token.push(new Allumettes());
    }
  }

  start() {
    this.statusGame = 'started';
    if (this.statusPlayer === 'computer') { this.play(); }
  }

  play() {
        // pour gagner l'adversaire doit se retrouver avec 4 allumettes ! 
      switch (this.nbToken) {
          case 0:
              break;
          case 1:
          case 4:
          case 5:
          case 8:
          case 9:
          case 10:
          case 11:
              this.take(1, 'computer');
              break;
          case 2:
          case 6:
              this.take(2, 'computer');
              break;
          default:
              this.take(3, 'computer');
              break;
      }
  }

  userChoose (nbToken) {
      this.take(nbToken, 'user');
        // simuler une reflexion de l'ordi permettant l'animation 
      setTimeout(() => { this.play(); }, 1500);
  }

  take (nbToken, statusPlayer) {
    //   changement de joueur en laissant le temps a l'animation
    (this.statusPlayer === 'computer') ? setTimeout(() => { this.statusPlayer = 'user'; }, 1500) : this.statusPlayer = 'computer';
    this.nbToken -= nbToken;

    // partie terminée, on en relance une
    if (this.nbToken <= 0) { alert(statusPlayer + ' win !'); setTimeout(() => { this.init(); }, 500); }

    for (let i = 0; i < nbToken; i++) {
        let len = this.nbToken - 1 + nbToken;
        this.token[len - i].hide();
        // cacher les dernieres allumettes selectionnées
    }

  }
}

class Allumettes {
  status;
  cssClass;

  constructor() {
      this.status = 'visible';
      this.cssClass = 'allumette fixed';
  }

  hide () {
      this.cssClass = 'allumette animated slideOutDown';
      setTimeout(() => { this.status = 'hidden'; }, 1200);
  }
}
