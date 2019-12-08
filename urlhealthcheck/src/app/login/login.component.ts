import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {MessageService, Message} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
 

  username:string="";
  password:string="";
  loginSubs:Subscription;
  returnUrl:string;
  msgs: Message[] = [];

  constructor(
    private authService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Home';

  }

  login()
  {
    if(this.username!=="" &&  this.password!=="")
    {
      this.loginSubs=this.authService.authenticate(this.username,this.password)
      .pipe(first())
      .subscribe(
        user=>{
          this.router.navigate([this.returnUrl]);
        }
        ,error=>{
          this.msgs=[];
          if(error.status===401){
          this.msgs.push({severity:'error', summary:'Error: ', detail:'Incorrect Username or Password'});
          }else{
          this.msgs.push({severity:'error', summary:'Error: ', detail:'Unknown Error'});
          }
          this.router.navigate(["/Login"]);
          this.username="";
          this.password="";
          console.log(error);
          
        }
      )
    }

  }

  ngOnDestroy(): void {
    console.log("Destroying login component....");

  }

}
