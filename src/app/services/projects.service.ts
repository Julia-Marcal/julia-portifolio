import { Injectable } from '@angular/core';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projs: Project[] = [
    new Project(
      'opengenus',
      '../../assets/images/opengenus.jpg',
      'Go Reusable Api',
      'Go-reusable-api is a highly performant, reusable, and easy-to-understand API built with Golang, Gin, and Gorm. This API is designed to offer a robust feature set while ensuring optimized performance and security.',
    ),

    new Project(
      'opengenus',
      '../../assets/images/opengenus.jpg',
      'Scraping bets and telegram-bet-bot',
      'Revolutionize your betting experience with this innovative project, which integrates bet scraping and a Telegram bot. Using Puppeteer, it scrapes the best betting tips, games, and odds based on user-registered leagues, and delivers them directly to you via Telegram every day.',
    )
  ];

  getProjects(): Project[] {
    return this.projs;
  }
}
