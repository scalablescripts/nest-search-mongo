import {seeder} from "nestjs-seeder";
import {ProductSeeder} from "./product.seeder";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./product.entity";


seeder({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest_search'),
        MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])
    ]
}).run([ProductSeeder]);
