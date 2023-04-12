import { Component, OnInit } from '@angular/core';
import { Characte } from './character.dto';
import { OpenAiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  name!: string;
  selectedOptionGenre: any;
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

  selectedOptionStyle: any;
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
  constructor(private openAiService: OpenAiService) {}

  ngOnInit(): void {}

  addCharacter(): void {
    this.characters.push({ lastName: '', firstName: '' });
    console.log(this.characters);
  }

  generate(): void {
    const form = {
      name: this.name,
      optionGenre: this.selectedOptionGenre,
      optionStyle: this.selectedOptionGenre,
      characters: this.characters,
    };
    this.openAiService.createStory(form);
  }
}
