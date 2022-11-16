import { Product } from './../model/product-model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor() { }

  @Output() close = new EventEmitter<void>();
  @Output() product = new EventEmitter<Product>();
  itProduct: Product = new Product();
  nameOfProduct: string = "";

  ngOnInit() {
  }

  addProduct(){
    this.itProduct.name = this.nameOfProduct;
    this.product.emit(this.itProduct);
    this.close.emit();
  }

  closeModal(){
    this.close.emit();
  }

}
