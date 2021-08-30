import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addUserForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
       
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+")
      
      ])
    }

    this.addUserForm = this.fb.group(formControls)
  }

  get email() { return this.addUserForm.get('email') }
  get password() { return this.addUserForm.get('password') }
 


  ngOnInit(): void {
  }

  addUser() {
    console.log(this.addUserForm.value);

  }
  
}
