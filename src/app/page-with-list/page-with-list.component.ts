import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product-model';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-page-with-list',
  templateUrl: './page-with-list.component.html',
  styleUrls: ['./page-with-list.component.css']
})
export class PageWithListComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductServiceService) { 
    this.getProducts();
    this.findCheck();
  }

  buttonActive: boolean = false;
  checked: boolean = false;

  modal: boolean = false;

  ngOnInit() {
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
    console.log("!");
  }

  showModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }

  addProduct(product: Product){
    this.modal = false;
    if(product.name.length > 0){
      this.productService.addProduct(product);
    }
  }

  removeProducts(){
    this.productService.removeProduct();
    this.findCheck();
  }

  addConditionButton(products: Product[]){
    this.products = products;
    this.findCheck();
    
  }

  findCheck(){
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i].checked){
        this.checked = true;
      }
    }
  
    if(this.checked)
    {
      this.buttonActive = true;
    }
    else{
      this.buttonActive = false;
    }
    
    this.checked = false;
  }

}
