import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { Product } from '../../model/Product';
import { ProductRepository } from '../../model/Product.repository';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {

  id: number = 0;
  heroTitle: string = "";

  constructor(private _activatedRoute: ActivatedRoute, private productRepository: ProductRepository) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log("Tek Ürün : ", this.productRepository.getProductById(params['id']));
    });



  }

  ngOnInit() {

  }

  get product(): Product | undefined {
    return this.productRepository.getProductById(this.id);
  }

}
