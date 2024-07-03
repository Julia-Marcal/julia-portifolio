import { Injectable } from '@angular/core';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    new Job(
      'src/opengenus.jpg',
      'opengenus',
      'https://br.fiverr.com/juliamarcal',
      'Open Genus',
      'Trabalho voluntário',
      [
        'Escrever artigos técnicos sobre tópicos relacionados a engenharia de software',
        'Analisar protocolos e rede e sistemas',
        'Desenvolvimento backend com nodejs e express'
      ]
    ),
    new Job(
      'src/fiverr.png',
      'fiverr',
      'https://br.fiverr.com/juliamarcal',
      'Fiverr',
      'Freelance',
      [
        'Desenvolvimento Backend com Typescript, Nodejs, MongoDB, stripe, docusign, yup e outros...',
        'Organização e criação da arquitetura do código.',
        'Testes com jest e documentação com swagger.'
      ]
    ),
    new Job(
      'src/windDigital.png',
      'wind',
      'https://winddigital.com.br',
      'Wind',
      'CLT',
      [
        'Desenvolvimento Fullstack com Php, Javascript, Angular, bootstrap, sql e outros...',
        'Desenvolvimento de módulos, abrangendo tanto a parte front-end quanto a parte back-end',
        'Criação e manutenção de esquemas e consultas de banco de dados.'
      ]
    )
  ];

  getJobs(): Job[] {
    return this.jobs;
  }
}
