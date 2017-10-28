import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  private categories=['diet','suplements','hydration','energy boosts','sportswear','health','events','trainings','other'];

  constructor() { }



  getCategories(){
    return this.categories;
  }

}
