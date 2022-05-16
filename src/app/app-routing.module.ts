import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { Article1Component } from './pages/article1/article1.component';
import { Article2Component } from './pages/article2/article2.component';
import { Article3Component } from './pages/article3/article3.component';
import { Article4Component } from './pages/article4/article4.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article1', component: Article1Component},
  {path: 'article2', component: Article2Component},
  {path: 'article3', component: Article3Component},
  {path: 'article4', component: Article4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
