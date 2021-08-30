import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup

  constructor(private fb: FormBuilder) {

   
    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    }

    this.addProductForm = this.fb.group(formControls)
  }

  get name() { return this.addProductForm.get('name') }
  get description() { return this.addProductForm.get('description') }
  get price() { return this.addProductForm.get('price') }




  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.addProductForm.value);

  }
 
}
