import { Component, OnInit } from '@angular/core';
import {News} from '../../shared/models/news.model';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public news: News[] = [
    { title: 'Это новость-статья',
      content: 'Lorem ipsum dolor sit amet.',
      previewImg: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    { title: 'newfdfsds1',
      content: 'Lore3333m ipsum dolor sit amet.',
      previewImg: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'}
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
