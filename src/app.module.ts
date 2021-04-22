import {Module} from '@nestjs/common';
import {ProductModule} from './product/product.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest_search', {
            autoCreate: true
        }),
        ProductModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
