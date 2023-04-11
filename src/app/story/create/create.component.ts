import { Component, OnInit } from '@angular/core';
import { Characte } from './character.dto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  optionGenre: Array<any> = [
    {
      name: 'Fantasy',
      code: 'F',
    },
    {
      name: 'Heroic',
      code: 'F',
    },
    { name: 'Crime', code: 'F' },
  ];

  optionStyle: Array<any> = [
    {
      name: 'BD',
      code: 'BD',
    },
    {
      name: 'Comic',
      code: 'C',
    },
    { name: 'Tatto', code: 'T' },
  ];

  characters: Array<Characte> = [];
  constructor() {}

  ngOnInit(): void {
    console.log('coucou');
  }

  addCharacter(): void {
    this.characters.push({ lastName: '', firstName: '' });
    console.log(this.characters);
  }

  generate(): void {}
}
