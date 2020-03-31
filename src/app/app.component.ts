import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  //MAKE BODY TAG HAVE URL CLASS
  previousUrl: string;
  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });
  }
  title = 'notcalpi20';
    ngOnInit() {
    //BURGER MENU LOGICS
    //SELECTING THE DOM ELEMENTS
    var mobileMenu = document.querySelector('.mobile-menu');
    var burgerTrigger = document.getElementById('click-event-toggle-mobile-menu');
    var burgerBars;


    //EXECUTE THE FUNCTION ON CLICK
      burgerTrigger.addEventListener('click', function() {
        // console.log('You clicked');
        if(mobileMenu.classList.contains('d-none') || mobileMenu.classList.contains('d-xs-none')){
          mobileMenu.classList.remove('d-none');
          mobileMenu.classList.remove('d-xs-none');

          burgerBars = document.querySelectorAll('.hide-on-expanded');
          for (var i = 0; i < burgerBars.length; ++i) {
            burgerBars[i].classList.add('invisible');
         }

          // console.log('The burger menu is expanded');

        }else if (!(mobileMenu.classList.contains('d-none')) && !(mobileMenu.classList.contains('d-xs-none'))){
          mobileMenu.classList.add('d-none');
          mobileMenu.classList.add('d-xs-none');

          burgerBars = document.querySelectorAll('.hide-on-expanded');
          for (var i = 0; i < burgerBars.length; ++i) {
            burgerBars[i].classList.remove('invisible');
         }

          // console.log('The burger menu is collapsed');

        }else{
          // console.log('Something went wrong');
        }
      });




    var portfolioBurger = document.querySelector('.portfolio-burger');
      if (portfolioBurger){
        portfolioBurger.addEventListener('click', function() {
          mobileMenu.classList.toggle('d-none');
          burgerBars.classList.remove('invisible');
        });
      }

    var aboutMeBurger = document.querySelector('.about-me-burger');
      if (aboutMeBurger){
        aboutMeBurger.addEventListener('click', function() {
          mobileMenu.classList.toggle('d-none');
          burgerBars.classList.remove('invisible');
        });
      }

    var reachMeBurger = document.querySelector('.reach-me-burger');
      if (reachMeBurger){
        reachMeBurger.addEventListener('click', function() {
          mobileMenu.classList.toggle('d-none');
          burgerBars.classList.remove('invisible');
        });
      }


    //COOKIE CONSENT JQUERY
    var cookieWarning = document.getElementById('cookie_consent');
    var closeCookieWarning = document.getElementById('close-cookie-button');

    if (document.cookie.indexOf('cookieconsent=true') == -1) {
      // console.log('Cookie already existing');
      cookieWarning.style.display= 'flex';
      // $('#cookie_consent').css('display','flex');
    }else{
      // console.log('cookie already there');
    }
    //COOKIE CONSENT ON CLICK
    closeCookieWarning.addEventListener('click', function() {
      var fifteenDays = 1000*60*60*24*15;
      var expires = new Date((new Date()).valueOf() + fifteenDays);
      document.cookie = "cookieconsent=true;expires=" + expires.toUTCString();
      cookieWarning.style.display= 'none';
    });
  }
}
