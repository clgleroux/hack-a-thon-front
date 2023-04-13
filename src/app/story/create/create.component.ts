import { Component, OnInit } from '@angular/core';
import { Characte } from '../../interface/character.dto';
import { OpenAiService } from 'src/app/services/openai.service';
import { Router } from '@angular/router';

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
  constructor(private openAiService: OpenAiService, private router: Router) {}

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
    this.openAiService.createStory(form).then((story: any) => {
      console.log(story.data.choices[0].text);
      console.log(story.data.choices[0].text.substring(2));
      let newStory = JSON.parse(story.data.choices[0].text.substring(2).trim());
      this.openAiService.createImg(newStory.story).subscribe((img: any) => {
        let createBook = {
          name: newStory.title,
          story: newStory.story,
          img: img,
        };
      });
      console.log(newStory.title);
      console.log(newStory.story);
      // this.router.navigate(['/story/view', { name, text, imgSrc }]);
    });
  }
}
