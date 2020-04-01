import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { FilteredProjectsComponent } from './views/filtered-projects/filtered-projects.component';
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';
import { ReachMeComponent } from './views/reach-me/reach-me.component';
import { BlogComponent } from './views/blog/blog.component';

import { DisplayProjectsComponent } from './components/display-projects/display-projects.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'about-me', component: AboutMeComponent },
  { path: 'home', component: PortfolioComponent },
  { path: 'projects/:tag', component: FilteredProjectsComponent },
  { path: 'projects/:codinglang', component: FilteredProjectsComponent },
//   { path: 'project/:id', component: ProjectDetailComponent },
  // { path: 'reach-me', component: ReachMeComponent },
//   { path: 'cookies', component: CookiesComponent },
//   { path: 'blog', component: BlogComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
