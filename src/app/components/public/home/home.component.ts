import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

}
