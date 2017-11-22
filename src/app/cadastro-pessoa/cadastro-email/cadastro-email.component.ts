import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-email',
  templateUrl: './cadastro-email.component.html',
  styleUrls: ['./cadastro-email.component.css']
})
export class CadastroEmailComponent implements OnInit {

pessoas: any;

	constructor( 
	private angularFire: AngularFireDatabase,
	private afAuth: AngularFireAuth,
	private router: Router
	) { }

  ngOnInit() {  }

	form_sing(f: NgForm){
	this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.senha.value)
	      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(["/cadastro"]);
      })
      .catch(error => {
 var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});

 
		}

}
