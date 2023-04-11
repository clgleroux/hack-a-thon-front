import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [StoryComponent, CreateComponent, ListComponent, ViewComponent],
  imports: [CommonModule, StoryRoutingModule],
})
export class StoryModule {}
