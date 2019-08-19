import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LessonpageComponent} from './lessonpage/lessonpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'lessons', component: LessonpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
