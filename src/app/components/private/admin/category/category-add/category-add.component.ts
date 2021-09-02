import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  addCategoryForm: FormGroup

  listCategory:any[]=[];

  constructor(private fb: FormBuilder,private categorySerivce:CategoryService,private router:Router,
    private toastr: ToastrService) {

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
    let data = this.addCategoryForm.value;
    let category = new Category(undefined,data.name);
   
    this.categorySerivce.addCategory(category).subscribe(
      res=>{
       
        this.router.navigate(['/admin/category/list']);
        console.log(res);
        this.toastr.success('', 'Category added Succesfull');
      },
      err=>{
        console.log(err);
      }
    )
   
  }
 

  

  }
 






