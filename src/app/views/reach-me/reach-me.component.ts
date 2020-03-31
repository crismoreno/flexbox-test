import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reach-me',
  templateUrl: './reach-me.component.html',
  styleUrls: ['./reach-me.component.scss']
})
export class ReachMeComponent implements OnInit {
  constructor() {}
  ngOnInit() {

    // $(document).on('submit', 'form', function () {
    //   var email = $('#invisible-recaptcha-form #email').val();
    //   var name = $('#invisible-recaptcha-form #name').val();
    //   var telephone = $('#invisible-recaptcha-form #telephone').val();
    //   var company = $('#invisible-recaptcha-form #company').val();
    //   var message = $('#invisible-recaptcha-form #message').val();
    //   var grecaptcha = $('.grecaptcha-badge');
    //   var dataLayer;
    //   dataLayer.push({'event':'contactFormSubmit'});
    //   $.ajax({
    //     url: "https://usebasin.com/f/a353f1143d45.json",
    //     method: "POST",
    //     data: {email: email, name: name, telehpone: telephone, company:company, message: message},
    //     dataType: "json",
    //     captcha: grecaptcha.getResponse()
    //   });

    // });

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('change', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add('invalid-form');
            }
            else{
              form.classList.remove('invalid-form');
              form.classList.add('valid-form');
              document.getElementById('submit-button').classList.remove('disabled');
            }
            form.classList.add('was-validated');
          }, false);

        });

      }, false);
    })();
  }
}
