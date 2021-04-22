import {DataFactory, Seeder} from "nestjs-seeder";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "./product.entity";
import {Model} from "mongoose";


export class ProductSeeder implements Seeder {
    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ) {
    }

    drop(): Promise<any> {
        return this.productModel.deleteMany({}) as any;
    }

    seed(): Promise<any> {
        const products: any = DataFactory.createForClass(Product).generate(50);

        return this.productModel.insertMany(products);
    }

}
