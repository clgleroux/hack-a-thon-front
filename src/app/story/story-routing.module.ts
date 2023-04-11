import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { StoryComponent } from './story.component';

const routes: Routes = [
  {
    path: '',
    component: StoryComponent,
    children: [{ path: 'create', component: CreateComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
