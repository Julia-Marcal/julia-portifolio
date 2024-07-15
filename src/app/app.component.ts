import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalaxyComponent } from './components/galaxy/galaxy.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ToolsComponent } from './tools/tools.component';
import { JobService } from './services/job.service';
import { Job } from './models/job';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GalaxyComponent, NavBarComponent, AboutMeComponent, ToolsComponent, JobCardComponent], // Include CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }
}
