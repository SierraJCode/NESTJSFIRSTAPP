import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { NotFoundError } from 'rxjs';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post()
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        
        const product = await this.productService.createProduct(createProductDTO)

        return res.status(HttpStatus.OK).json({
            message: 'Product Created Succesfully',
            product: product
        });
    }

    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID)
        if(!product) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json(product);
    }

}
