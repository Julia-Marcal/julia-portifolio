import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { JobService } from './services/job.service';
import { Job } from './models/job';
import { ProjectsService } from './services/projects.service';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalaxyComponent, NavBarComponent, AboutMeComponent, ToolsComponent, JobCardComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs: Job[] = [];
  projects: Project[] = [];

  constructor(private jobService: JobService, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
    this.projects = this.projectsService.getProjects();
  }
}
