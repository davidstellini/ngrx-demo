import { Component, OnInit } from '@angular/core';
import { AppGameCategoryRoute } from '../../model/app-game-category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categoryRoute = AppGameCategoryRoute;
  constructor() {}

  ngOnInit(): void {}
}
