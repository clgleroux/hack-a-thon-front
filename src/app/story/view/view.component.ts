import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, UpdateBook } from 'src/app/interface/book.dto';
import { StoryService } from 'src/app/services/story.service';

import { PdfMakeWrapper, Item, Txt, Img, IText } from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { OpenAiService } from 'src/app/services/openai.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  book!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService,
    private openAiService: OpenAiService,
    private authService: AuthService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      const idStory = params['id'];
      this.storyService.findOne(idStory).subscribe((story: Book) => {
        this.book = story;

        let temp = this.book.chapters.map((item: any, i: string | number) => Object.assign({}, item, this.book.images[i]));
        console.log(temp)
        this.book.chapters = temp;
      });
    });
  }

  ngOnInit(): void {}

  nextChapter(): void {
    if (this.book.chapters !== undefined) {
      const sentence: string =
        this.book.chapters[this.book.chapters.length - 1].text;
      this.openAiService.continueStory(sentence).then((chapter: any) => {
        let nextChapter = JSON.parse(
          chapter.data.choices[0].text.substring(2).trim()
        );

        const formImg = {
          sentence: nextChapter.story.substring(0,255),
          optionStyle: undefined,
        };

        this.openAiService.createImg(formImg).then((img: string) => {
          const updateBook: UpdateBook = {
            chapter: nextChapter.story,
            img: img,
            position: this.book.chapters.length,
          };

          this.storyService
            .update(this.book.id, updateBook)
            .subscribe((data: any) => {
              this.book.chapters.push(data.next)
            });
        });
      });
    }
  }

  async generatePDF(): Promise<void> {
    PdfMakeWrapper.setFonts(pdfFonts);

    const pdf = new PdfMakeWrapper();

    pdf.add(new Txt(this.book.name).bold().fontSize(22).end);
    console.log(this.book.chapters)
    Promise.all([
      this.book.chapters.forEach(async (chapter: any) => {
        // TODO : PAS cool
        // pdf.add(await new Img(chapter.url).build());
        pdf.add(new Txt(chapter.text).fontSize(12).end);
        return true;
      }),
    ]).then(data => {
      pdf.create().download();
    });
  }
}
