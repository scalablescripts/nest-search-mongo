import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {Factory} from "nestjs-seeder";
import {randomInt} from "crypto";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Factory(faker => faker.lorem.words(2))
    @Prop()
    title: string;

    @Factory(faker => faker.lorem.words(10))
    @Prop()
    description: string;

    @Factory(faker => faker.image.imageUrl())
    @Prop()
    image: string;

    @Factory(faker => randomInt(10, 100))
    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
