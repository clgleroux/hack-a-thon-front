import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';

@NgModule({
  declarations: [StoryComponent, CreateComponent],
  imports: [CommonModule, StoryRoutingModule],
})
export class StoryModule {}
