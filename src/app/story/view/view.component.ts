import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/book.dto';
import { StoryService } from 'src/app/services/story.service';

import { PdfMakeWrapper, Item, Txt, Img } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { OpenAiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  book!: Book;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService,
    private openAiService: OpenAiService
  ) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      const idStory = params['id'];
      this.storyService.findOne(idStory).subscribe((story: Book) => {
        this.book = story;
      });
    });
  }

  ngOnInit(): void {}

  nextChapter(): void {
    if (this.book.chapters !== undefined) {
      const sentence: string =
        this.book.chapters[this.book.chapters.length - 1].text;
      this.openAiService.continueStory(sentence).subscribe((chapter: any) => {
        console.log(chapter.story);
      });
    }
  }

  async generatePDF(): Promise<void> {
    // Set the fonts to use
    PdfMakeWrapper.setFonts(pdfFonts);

    const pdf = new PdfMakeWrapper();

    pdf.add(new Txt('Item 1').end);
    pdf.add(await new Img('https://placehold.co/400x200').build());

    pdf.create().download();
  }
}
