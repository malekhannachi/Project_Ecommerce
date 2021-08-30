import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  updateProductForm: FormGroup

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

    this.updateProductForm = this.fb.group(formControls)
  }

  get name() { return this.updateProductForm.get('name') }
  get description() { return this.updateProductForm.get('description') }
  get price() { return this.updateProductForm.get('price') }



  ngOnInit(): void {
  }

  updateProduct() {
    console.log(this.updateProductForm.value);

  }

}
