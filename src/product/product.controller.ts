import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post()
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        
        const product = await this.productService.createProduct(createProductDTO)

        return res.status(HttpStatus.OK).json({
            message: 'Vrg.. todo salió bien.',
            product: product
        });
    }

    @Get()
    getProduct(){

    }
}
