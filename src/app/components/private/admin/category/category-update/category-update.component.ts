import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  updateCategoryForm: FormGroup

  constructor(private fb: FormBuilder,private route:ActivatedRoute,  private userService:CategoryService,
    private router:Router,private toastr: ToastrService) {

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
    let idCategory =this.route.snapshot.params.id;
    console.log(idCategory);

    this.userService.getOneUser(idCategory).subscribe(
      res=>{
        let category = res;
        this.updateCategoryForm.patchValue({
          name : category.name
        
        })
      

      },
      err=>{
        console.log(err);
      }
    )
  }
  

    updateCategory() {
      console.log(this.updateCategoryForm.value);

      let data = this.updateCategoryForm.value;
      let idUser = this.route.snapshot.params.id;
      let category = new Category(idUser,data.name);
  
      this.userService.updateCategory(category).subscribe(
        res=>{
          console.log(res);
          this.toastr.warning("","Category updated Succesfull");
  
          this.router.navigate(['/admin/category/list']);
        },
        err=>{
          console.log(err);
        }
      )
  
    }
   
}
