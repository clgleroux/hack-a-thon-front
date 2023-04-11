import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  {
    path: 'story',
    loadChildren: () => import('./story/story.module').then(m => m.StoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
