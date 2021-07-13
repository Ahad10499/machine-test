import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  model: any;
  public registerForm : FormGroup;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor( 
     public service: UserService,
     private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(  ) 
  {
    this.registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(12)] ),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
  });
  }
  get f()
{
    return this.registerForm.controls;
}
  register() {
    this.model = this.registerForm.value;
    this.service.registerUser(this.model).subscribe(
      (result) => {
        if (result) {
          this.router.navigateByUrl("/user");
        } else {
          this.toastr.error("something wrong!", "Toastr fun!");
        }
      },
      (err) => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("<br/>");
        } else {
          this.serverErrorMessages =
            "Something went wrong.Please contact admin.";
        }
      }
    );
  }

}
