import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StoryService } from './story.service';

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  constructor(private storyService: StoryService) {}

  createStory(form: any): void {}
  continueStory(form: any): void {}
  createImg(form: any): void {}
}
