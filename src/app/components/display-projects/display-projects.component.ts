import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-projects',
  templateUrl: './display-projects.component.html',
  styleUrls: ['./display-projects.component.scss']
})
export class DisplayProjectsComponent implements OnInit {
  @Input() projects = null;
  constructor() { }

  ngOnInit() {
  }

}
