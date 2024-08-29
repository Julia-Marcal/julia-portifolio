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
      'Go-reusable-api é uma API sofisticada que combina alto desempenho com funcionalidades avançadas, como cache com Redis, integração com PostgreSQL, limitação de taxa, autenticação segura, conteinerização com Docker e monitoramento com Prometheus. Tudo isso mantendo facilidade de uso e segurança robusta.',
      'https://github.com/Julia-Marcal/Go-reusable-api'
    ),

    new Project(
      'https://www.svgrepo.com/show/407351/robot.svg',
      'robô',
      'Scraping bets',
      'Revolucione sua experiência de apostas com este projeto inovador, que integra scraping de apostas e um bot do Telegram. Usando o Puppeteer, ele coleta as melhores dicas de apostas, jogos e odds com base nas ligas registradas pelo usuário, e as entrega diretamente para você via Telegram todos os dias.',
      'https://github.com/Julia-Marcal/scraping-bets'
    ),

    new Project(
      'https://www.svgrepo.com/show/343522/telegram-communication-chat-interaction-network-connection.svg',
      'telegram',
      'Telegram-bet-bot',
      'Um bot no Telegram para enviar as scraps das apostas diárias que fiz com o Puppeteer, baseadas nas ligas cadastradas pelo usuário.',
      'https://github.com/Julia-Marcal/telegram-bet-bot'
    )
  ];

  getProjects(): Project[] {
    return this.projs;
  }
}
