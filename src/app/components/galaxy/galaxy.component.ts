import { Component, OnInit } from '@angular/core';

let particlesTS: any;

@Component({
  selector: 'app-galaxy',
  standalone: true,
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements OnInit {
  ngOnInit(): void {
    if (particlesTS && particlesTS.load) {
      particlesTS.load('particles-ts', '../../assets/particles.json', function () {
        console.log('particles.js loaded');
      });
    } else {
      console.error('particlesTS is not defined or load method is not available');
    }
  }
}
