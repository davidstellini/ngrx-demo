import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedListComponent } from './feed/feed-list/feed-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games/top',
    pathMatch: 'full',
  },
  {
    path: 'games/:category',
    component: FeedListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
