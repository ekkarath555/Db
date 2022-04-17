import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('/1')
    async stonk1(): Promise<any>{
        return this.userService.access1();
    }
    @Get('/2')
    async stonk2(): Promise<any>{
        return this.userService.access2();
    }
    @Get('/3')
    async stonk3(): Promise<any>{
        return this.userService.access3();
    }
    @Get('/4')
    async stonk4(): Promise<any>{
        return this.userService.access4();
    }
    @Get('/5')
    async stonk5(): Promise<any>{
        return this.userService.access5();
    }
    @Get('/6')
    async stonk6(): Promise<any>{
        return this.userService.access6();
    }
    @Get('/7')
    async stonk7(): Promise<any>{
        return this.userService.access7();
    }
}
