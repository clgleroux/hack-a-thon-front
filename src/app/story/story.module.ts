import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StoryComponent, CreateComponent, ListComponent, ViewComponent],
  imports: [CommonModule, StoryRoutingModule, FormsModule],
})
export class StoryModule {}
