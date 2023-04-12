import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  story: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storyService: StoryService
  ) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.story = {};
      console.log(params);
      const idStory = params['id'];
      if (!idStory) {
        this.activatedRoute.paramMap.subscribe(paramPost => {
          this.story.name = paramPost.get('name');
          this.story.text = paramPost.get('text');
          this.story.imgSrc = paramPost.get('imgSrc');
          console.log(this.story);
        });
        // return true;
      } else {
        this.storyService.findOne(idStory).subscribe((story: any) => {
          // return true;
        });
      }
    });
  }

  ngOnInit(): void {}
}
