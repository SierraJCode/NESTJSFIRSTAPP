import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Post()
    createPost(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Vrg.. todo salió bien.'
        })
    }

    @Get()
    getProduct(){

    }
}
