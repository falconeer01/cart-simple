import { Component, Input } from '@angular/core';
import { Cart } from '../../models/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() carts:Cart[] = [];

  getTotal():number{
    let total = 0;
    this.carts.map(cart=>cart.count).forEach(count=>{
      total+=count;
    })
    return total;
  }
}
