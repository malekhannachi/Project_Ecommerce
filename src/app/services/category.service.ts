import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private addCategoryUrl = "http://localhost:8080/categories/add";
  private getAllCategoriesUrl ="http://localhost:8080/categories/all";
  private getOneUserUrl = "http://localhost:8080/categories/one/"
  private updateCategoryUrl = "http://localhost:8080/categories/update"
  private deleteCategoryUrl = "http://localhost:8080/categories/delete/";
  constructor(private http:HttpClient) { }

  addCategory(category :Category){
    return this.http.post<any>(this.addCategoryUrl,category);
  }
  getAllCategories(){
    return this.http.get<any>(this.getAllCategoriesUrl);
   }

 deleteCategory(id:any){
   return this.http.delete<any>(this.deleteCategoryUrl+id);
 }

 getOneUser(id: any) {
  return this.http.get<any>(this.getOneUserUrl + id)
}

updateCategory(category:Category){
  return this.http.patch<any>(this.updateCategoryUrl, category);
}
}
