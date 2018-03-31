import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']

})
export class LoginFormComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
     private router: Router)
      { }


  ngOnInit() {}
	  form_login(f: NgForm){
		  if(!f.valid)
			  return;
		  this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.senha.value)
		    .then(value => {
			       this.router.navigate(["/cadastro"]);
			})

      .catch(error => {
    var errorCode = error.code;
     var errorMessage = error.message;
      if (errorCode == 'auth/invalid-email') {
        alert('Email Invalido');
      } else {
        alert(errorMessage);
      }
    console.log(error);
      });
      }
  }
