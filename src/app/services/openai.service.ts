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
  constructor(private storyService: StoryService) {}

  async createStory(form: any): Promise<any> {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    let sentence: string =
      'Est ce que je peux avoir une histoire sur les elephants rose en mode heroic fantasy avec comme personnage "Mongole le mongolito", s\'il te plaît ? Donne moi aussi un titre de l\'histoire. Retourne le tout sous format `json` avec en nom de paramètre story et title que je puisse directement utiliser `JSON.parse`. Merci';

    return openai.createCompletion({
      model: 'text-davinci-003',
      prompt: sentence,
      temperature: 0.9,
      max_tokens: 2048,
    });
  }
  continueStory(sentence: string): any {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    sentence = `${sentence} Continue l'histoire s'il te plaît. Retourne le tout sous format \`json\` avec en nom de paramètre story que je puisse directement utiliser \`JSON.parse\`. Merci`;

    return openai.createCompletion({
      model: 'text-davinci-003',
      prompt: sentence,
      temperature: 0.9,
      max_tokens: 2048,
    });
  }
  createImg(form: any): any {}
}
