import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lezioneU3s2g3';

  users = [
    {
      nome: 'Mario',
      cognome: 'Rossi',
      studente: true,
    },
    {
      nome: 'Aldo',
      cognome: 'Bianchi',
      studente: true,
    },
    {
      nome: 'Anna',
      cognome: 'Verdi',
      studente: false,
    },
    {
      nome: 'Nicola',
      cognome: 'Neri',
      studente: true,
    },
    {
      nome: 'Giovanni',
      cognome: 'Chiari',
      studente: false,
    },
  ];
}
