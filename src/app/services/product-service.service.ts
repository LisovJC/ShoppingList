import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

constructor() { }

private products: Array<Product> = [
  {name: "eggs", checked: false},
  {name: "milk", checked: false},
  {name: "oil", checked: false}
]

public addProduct(product: Product){
  this.products.push({
    name: product.name,
    checked: false
  });
  localStorage.setItem('session', JSON.stringify(this.products));
}

public removeProduct(){
  for(let i = 0; i < this.products.length; i++){
    if(this.products[i].checked){
      this.products.splice(i, 1);
      i = -1;
    }
  }
  localStorage.setItem('session', JSON.stringify(this.products));
}

public checkProduct(condition: boolean, index: number){
  this.products[index].checked = condition;
  localStorage.setItem('session', JSON.stringify(this.products));
}

public getProducts(): Observable<Product[]>{
  let data: any = localStorage.getItem('session');
    if(data != null){
      this.products = JSON.parse(data);
      return of(this.products);}
  
      return of(this.products);
}
}
