import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var moreInfoButton = document.querySelector('.more-info-button');
    var moreInfoButtonDown = document.querySelector('.more-info-button-down');
    var moreInfoButtonUp = document.querySelector('.more-info-button-up');
    
    moreInfoButton.addEventListener('click', function() {

      if(this.getAttribute('aria-expanded') === 'true'){
        moreInfoButtonUp.classList.add('d-none');
        moreInfoButtonUp.classList.remove('d-inline');
        moreInfoButtonDown.classList.remove('d-none');
        moreInfoButtonDown.classList.add('d-inline');

        // console.log(this + 'is collapsed');
      }else{
        moreInfoButtonDown.classList.add('d-none');
        moreInfoButtonDown.classList.remove('d-inline');
        moreInfoButtonUp.classList.remove('d-none');
        moreInfoButtonUp.classList.add('d-inline');
        // console.log(this + 'is expanded');
      }
    });

  }

}
