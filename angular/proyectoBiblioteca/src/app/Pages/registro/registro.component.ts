// register.component.ts

import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }
}
