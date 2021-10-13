import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: BlogLandingComponent },  

  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

