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
      'https://br.fiverr.com/juliamarcal',
      'Open Genus',
    )
  ];

  getProjects(): Project[] {
    return this.projs;
  }
}
