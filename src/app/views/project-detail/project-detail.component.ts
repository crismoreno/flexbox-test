import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

import { ProjectsService } from '../../service/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project = null;

  constructor(private projectsService: ProjectsService,  private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
    this.project = this.projectsService.getProjectById(params.id);
    });
  }

  public getSanitizeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
