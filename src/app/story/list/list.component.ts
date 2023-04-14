import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  stories!: any;

  constructor(
    private storyService: StoryService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.authService.currentUser)
    this.storyService
      .getAll(this.authService.currentUser.id)
      .subscribe((stories: any) => {
        console.log(stories)
        this.stories = stories;
      });
  }

  viewStory(id: any) {
    this.router.navigate([`/story/view/${id}`])
  }
}
