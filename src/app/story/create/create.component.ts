import { Component, OnInit } from '@angular/core';
import { Characte } from './character.dto';
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
    // this.openAiService.createStory(form).subscribe((story: any) => {
    const name = 'story.name';
    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat magna nulla, id dignissim nulla gravida ut. Nulla facilisi. Praesent condimentum mi mollis turpis vulputate blandit. Sed id faucibus urna. Phasellus ut varius ligula. Curabitur sed nisl purus. Duis maximus ex vitae diam vestibulum lobortis. Nulla facilisi. Proin sem justo, lobortis ac nisl in, porta euismod elit. Maecenas tincidunt lorem in ex dignissim, vel congue elit cursus. Pellentesque nisl lacus, porttitor ac orci at, fringilla auctor augue. Vivamus porta nec augue ac sollicitudin. Sed ut faucibus enim, varius venenatis nibh. Maecenas pulvinar metus ac nulla mollis elementum. Nulla venenatis libero eu nunc sollicitudin auctor. Ut id leo lorem.\nDonec eu auctor nunc. Etiam finibus mollis nunc eu sodales. Integer id convallis quam, eu mattis massa. Aenean ante ligula, fringilla in interdum eget, accumsan non tellus. Mauris at maximus ipsum. Aliquam lobortis diam et faucibus venenatis. Suspendisse tellus nibh, pellentesque vel porta sed, commodo a nunc.\nDonec mattis tortor urna, eget interdum lorem lobortis sed. Vestibulum ipsum lorem, vehicula vel mi non, egestas posuere nunc. Aliquam tellus leo, auctor vel lacus sed, congue porta urna. Cras condimentum vehicula lectus. In id ex lorem. Suspendisse maximus, nulla pretium porttitor dignissim, tortor lorem sagittis purus, nec rutrum metus lacus eu orci. Praesent convallis, neque quis molestie sodales, mauris mi fringilla magna, quis condimentum nibh risus vitae orci. In hac habitasse platea dictumst. Integer elementum nulla ut tellus rutrum, eu efficitur velit luctus. Curabitur mattis consectetur varius.\nPellentesque scelerisque tempor ornare. Suspendisse magna elit, venenatis vel magna imperdiet, egestas ornare dui. Nunc quis nibh ligula. Maecenas a magna nec nisl facilisis accumsan. Nullam velit nibh, mattis ut sodales mattis, sodales ut odio. Integer ultricies leo dolor, nec rhoncus dui consequat at. Donec suscipit nulla at imperdiet pulvinar. Aliquam ullamcorper erat diam, vel fringilla erat condimentum et. Nullam blandit semper lectus vitae efficitur. Nunc pellentesque, lectus ac elementum pharetra, nunc dolor egestas est, vel aliquam enim turpis vel lectus. In tristique interdum velit nec egestas. Fusce velit nulla, maximus at cursus vel, suscipit sed metus. Proin ac urna ut nisi facilisis pellentesque. Phasellus faucibus arcu lorem. Pellentesque et ante nec nulla sollicitudin suscipit.\nDonec est orci, lobortis eu congue vel, sollicitudin sit amet nulla. Donec fermentum metus vel nisi consectetur luctus. Integer in nunc nisl. Suspendisse non felis lectus. Vivamus elementum lobortis tincidunt. Maecenas auctor commodo enim eu elementum. Proin vel nibh eget erat facilisis rhoncus vitae ac nunc. Proin et mauris ut tortor consequat efficitur vitae ut leo. Sed consequat sem ac faucibus varius. Cras nulla erat, fringilla a congue ut, lobortis viverra eros.`;
    const imgSrc = 'story.img';
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/story/view', { name, text, imgSrc }]);
    // });
  }
}
