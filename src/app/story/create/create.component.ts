import { Component, OnInit } from '@angular/core';
import { Characte } from '../../interface/character.dto';
import { OpenAiService } from 'src/app/services/openai.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { CreateBook } from 'src/app/interface/book.dto';

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
      code: 'H',
    },
    { name: 'Crime', code: 'C' },
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

  displayLoader: boolean = false;

  characters: Array<Characte> = [];
  constructor(
    private openAiService: OpenAiService,
    private router: Router,
    private authService: AuthService,
    private storyService: StoryService
  ) {}

  ngOnInit(): void {}

  addCharacter(): void {
    this.characters.push({ lastName: '', firstName: '' });
    console.log(this.characters);
  }

  generate(): void {
    this.displayLoader = true;
    const form = {
      name: this.name,
      optionGenre: this.selectedOptionGenre,
      characters: this.characters,
    };
    this.openAiService.createStory(form).then((story: any) => {
      console.log(story.data.choices[0].text);
      console.log(story.data.choices[0].text.substring(2));
      let newStory = JSON.parse(story.data.choices[0].text.substring(2).trim());
      const formImg = {
        sentence: newStory.story,
        optionStyle: this.selectedOptionStyle,
      };
      this.openAiService.createImg(formImg).then((img: any) => {
        const createBook: CreateBook = {
          name: newStory.title,
          chapter: newStory.story,
          img: img,
        };
        this.storyService
          .create(this.authService.currentUser.id, createBook)
          .subscribe((book: any) => {
            this.displayLoader = false;
            this.router.navigate([`/story/view/${book.id}`]);
          });
      });
    });
  }
}
