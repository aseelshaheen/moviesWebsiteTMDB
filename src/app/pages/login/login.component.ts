import { assertPlatform, Component, inject } from '@angular/core';
import { BACKGROUND_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule, HeaderComponent]
  ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  logoUrl = LOGO_URL;
  bgUrl = BACKGROUND_URL;

  email!: String;
  password!: String;
  loginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);


  ngOnInit(){
    if(this.loginService.isLoggedIn){
      this.router.navigateByUrl('/browse');
    }
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toasterService.error('You Should Enter Email and Password');
      return;
    }

    
    this.loginService.login(this.email, this.password);
    // this.toasterService.success("Logged In Successfully")
  
  }


}
