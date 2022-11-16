import { ProductServiceService } from './../services/product-service.service';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product-model';

@Component({
  selector: 'app-list-shopping',
  templateUrl: './list-shopping.component.html',
  styleUrls: ['./list-shopping.component.css']
})
export class ListShoppingComponent implements OnInit {

  products!: Product[];
  @Output() outProducts = new EventEmitter<Product[]>();

  constructor(private productService: ProductServiceService) { 
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  selectProduct(select: Product, i: number){
    if(select.checked){
      this.productService.checkProduct(true, i);
    }else{
      this.productService.checkProduct(false, i);
    }

    this.outProducts.emit(this.products);
  }
}
