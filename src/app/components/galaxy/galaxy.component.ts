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
    particlesTS.load('particles-ts', '../../assets/particles.json', function () {
    });
  }
}
