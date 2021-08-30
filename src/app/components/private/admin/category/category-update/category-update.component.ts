import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  updateCategoryForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
       
      ])
    }

    this.updateCategoryForm = this.fb.group(formControls)
  }

  get name() { return this.updateCategoryForm.get('name') }

 


  ngOnInit(): void {
  }

  updateCategory() {
    console.log(this.updateCategoryForm.value);

  }
 
}
