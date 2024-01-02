import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from '../components/cart/cart.component';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CartSimple';
  carts:Cart[] = [
    {
      productId: 1,
      count: 8
    }
  ];

  addCartItem(productId:number){
    let cart = this.carts.find(cart=>cart.productId==productId)
    if(cart==undefined){
      this.carts.push({productId:productId, count:1});
    }else{
      cart.count++;
    }
  }

  removeCartItem(productId:number){
    let cartIndex = this.carts.findIndex(cart=>cart.productId==productId)
    if(cartIndex != -1){
      this.carts[cartIndex].count--;

      if(this.carts[cartIndex].count==0){
        this.carts.splice(cartIndex, 1);
      }
    }
  }
}
