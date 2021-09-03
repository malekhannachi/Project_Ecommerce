import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categoriesList:any[]=[]
  constructor(private categorySerivce:CategoryService) { }



  ngOnInit(): void {
    this.categorySerivce.getAllCategories().subscribe(
      result=>{
        this.categoriesList = result
        
      },
      error=>{
        console.log(error);
      }
    )

  }

  deleteCategory(category:any) {
    let index = this.categoriesList.indexOf(category);
    this.categoriesList.splice(index,1);

    this.categorySerivce.deleteCategory(category.id).subscribe(
      res=>{
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }






}
