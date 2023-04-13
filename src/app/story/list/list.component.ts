import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  stories!: [{ id: string; name: string; describe: string }];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getAll().subscribe((stories: any) => {
      this.stories = stories;
    });
  }
}
