import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './utils/material.module';
import { ArticleComponent } from './pages/article/article.component';
import { Article1Component } from './pages/article1/article1.component';
import { Article2Component } from './pages/article2/article2.component';
import { Article3Component } from './pages/article3/article3.component';
import { Article4Component } from './pages/article4/article4.component';
import { NewsComponent } from './components/news/news.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { MissionComponent } from './pages/mission/mission.component';
import { VioletComponent } from './pages/violet/violet.component';
import { LibraryComponent } from './pages/library/library.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ResponsiveHeaderComponent } from './components/responsive-header/responsive-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    NewsComponent,
    OfferComponent,
    ActivityComponent,
    MissionComponent,
    VioletComponent,
    LibraryComponent,
    CoursesComponent,
    CommentsComponent,
    ResponsiveHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
