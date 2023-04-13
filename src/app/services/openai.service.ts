import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoryService } from './story.service';
import { Configuration, OpenAIApi } from 'openai';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  configuration: any;
  constructor(private storyService: StoryService) {
    this.configuration = new Configuration({
      apiKey: environment.openaiKey,
    });
  }

  async createStory(form: any): Promise<any> {
    const openai = new OpenAIApi(this.configuration);

    let sentence: string = 'Créer moi une histoire.';

    if (form.name !== undefined) {
      sentence += `Le titre de l'histoire est : ${form.name}.`;
    } else {
      sentence += "Trouve moi le titre de l'histoire.";
    }

    if (form.optionGenre !== undefined) {
      sentence += `Le genre de l'histoire est : ${form.optionGenre}.`;
    }
    await form.characters.forEach(
      (character: { firstName: string; lastName: string }, index: any) => {
        if (character.firstName) {
          sentence += `Le personnage ${index} est '${character.firstName} ${character.lastName}'.`;
        }
      }
    );

    sentence +=
      'Retourne le tout sous format `json` avec en nom de paramètre story et title que je puisse directement utiliser `JSON.parse`. Merci';

    return openai.createCompletion({
      model: 'text-davinci-003',
      prompt: sentence,
      temperature: 0.9,
      max_tokens: 2048,
    });
  }

  async createImg(form: any): Promise<any> {
    const openai = new OpenAIApi(this.configuration);

    let sentence: string = `Donne moi une image avec cette histoire : '${form.sentence}'.`;
    if (form.optionStyle !== undefined) {
      sentence += `Le style de l'image doit être : form.optionStyle`;
    }

    let img = await openai.createImage({
      prompt: sentence,
      n: 1,
      size: '256x256',
    });

    return img.data.data[0].url;
  }

  continueStory(sentence: string): any {
    const openai = new OpenAIApi(this.configuration);

    sentence = `${sentence} Continue l'histoire s'il te plaît. Retourne le tout sous format \`json\` avec en nom de paramètre story que je puisse directement utiliser \`JSON.parse\`. Merci`;

    return openai.createCompletion({
      model: 'text-davinci-003',
      prompt: sentence,
      temperature: 0.9,
      max_tokens: 2048,
    });
  }
}
