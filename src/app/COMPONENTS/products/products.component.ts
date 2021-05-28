import { Component, OnInit , Input} from '@angular/core';
import {ShoppingCartService} from '../../SERVICE/shopping-cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any [string];

  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(p : any [string]){
  this.shopping_cart.addProduct(p)
  }

}
