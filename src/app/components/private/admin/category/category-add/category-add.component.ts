import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  addCategoryForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
       
      ])
    }

    this.addCategoryForm = this.fb.group(formControls)
  }

  get name() { return this.addCategoryForm.get('name') }

 


  ngOnInit(): void {
  }

  addCategory() {
    console.log(this.addCategoryForm.value);

  }
 

}
