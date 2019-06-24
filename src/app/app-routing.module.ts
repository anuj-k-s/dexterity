import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './_components/landing/landing.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { PostAddComponent } from './_components/post-add/post-add.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'post',
    component: PostAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
