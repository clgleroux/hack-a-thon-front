import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  stories!: [{ id: string; name: string; describe: string }];

  constructor(
    private storyService: StoryService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.storyService
      .getAll(this.authService.currentUser.id)
      .subscribe((stories: any) => {
        this.stories = stories;
      });
  }
}
