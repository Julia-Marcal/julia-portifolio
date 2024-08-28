import { Injectable } from '@angular/core';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projs: Project[] = [
    new Project(
      'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
      'Golang',
      'Go Reusable Api',
      'Go-reusable-api is a highly performant, reusable, and easy-to-understand API built with Golang, Gin, and Gorm. This API is designed to offer a robust feature set while ensuring optimized performance and security.',
    ),

    new Project(
      'https://www.svgrepo.com/show/521818/robot.svg',
      'robot',
      'Scraping bets and telegram-bet-bot',
      'Revolutionize your betting experience with this innovative project, which integrates bet scraping and a Telegram bot. Using Puppeteer, it scrapes the best betting tips, games, and odds based on user-registered leagues, and delivers them directly to you via Telegram every day.',
    ),

    new Project(
      '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="agenda" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="secondary" d="M12,3V9L10,8,8,9V3Zm9,4H19V9h2Zm0,6H19v2h2Z" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><rect id="primary" x="2.5" y="4.5" width="18" height="15" rx="1" transform="translate(23.5 0.5) rotate(90)" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect></svg>',
      'agenda',
      'Agenda segura',
      'Este projeto consiste em uma estrutura de servidor que permite aos usuários registrar seus contatos em um site seguro. Para o deploy, é necessário utilizar um servidor em plataformas como GCP ou AWS, além de configurar PM2, NGINX e MongoDB para garantir o desempenho e a segurança da aplicação.',
    )
  ];

  getProjects(): Project[] {
    return this.projs;
  }
}
