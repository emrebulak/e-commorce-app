export class Product {

  constructor(
    public id: number,
    public categoryId: number,
    public name: string,
    public price: number,
    public image: string,
    public description: string
  ) { }

}
