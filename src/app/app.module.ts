import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';


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
import { DisplayPostsComponent } from './components/display-posts/display-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CookiesComponent,
    FilteredProjectsComponent,
    HomeComponent,
    PortfolioComponent,
    ProjectDetailComponent,
    ReachMeComponent,
    DisplayProjectsComponent,
    NotFoundComponent,
    DisplayPostsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    HttpModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
