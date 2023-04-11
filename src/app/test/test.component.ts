import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    const { Configuration, OpenAIApi } = require('openai');
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Say this is a test',
      temperature: 0,
      max_tokens: 7,
    });

    console.log(response);
  }
}
