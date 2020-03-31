import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-filtered-projects',
  templateUrl: './filtered-projects.component.html',
  styleUrls: ['./filtered-projects.component.scss']
})
export class FilteredProjectsComponent implements OnInit {
  projects;
  constructor(private projectsService: ProjectsService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
    // console.log(params.tag);
    this.projects = this.projectsService.getProjectByTag(params.tag);
    });
  }

}
