import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  justRegistered:boolean = false;
  regFailureMessage:string = null;
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
  	//TODO this seems bad, how to fix?
  	this.loginService.user.pipe(
      take(1),
      map((user) => !!user),
      tap((loggedIn) => {
        if (!loggedIn) {
        	console.log("not logged in already");
        }
        else {
        	console.log("Logged in already");
        	this.router.navigate(["dashboard"]);
        }
      })).subscribe();
   }

  ngOnInit() {
  }

  register():void {
    if (this.validateForm(this.email, this.password)) {
    	this.loginService.newUser(this.email, this.password)
    	.then(s=>{
    		console.log("new user success");
    		this.justRegistered=true;
    		this.regFailureMessage=null;
    	})
    	.catch(e=>{
    		console.log("new user error");
    		console.log(e.message);
    		this.regFailureMessage=e.message;
    	});
    }
  }

  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      this.emailLogin(this.email, this.password);
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      return false;
    }

    if (password.length === 0) {
      return false;
    }

    if (password.length < 6) {
      return false;
    }
    return true;
  }
  guest() {
  	this.email="guest@example.com";
  	this.password="guestguest";
  	this.onLoginEmail();
  }

  emailLogin(email: string, password: string) {
    this.loginService.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/dashboard']))
        .catch( error => {
          console.log(error);
          this.router.navigate(['/login']);
        });
  }
}
