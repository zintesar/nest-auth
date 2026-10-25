import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserEmailDto } from '../../dto';

@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async userCreate(@Body() reqbody: UserDto) {
    return await this.userService.create(reqbody);
  }

  @Post('/findbyemail')
  async userFind(@Body() reqbody: UserEmailDto) {
    return await this.userService.findOneByEmail(reqbody.email);
  }

  // @Post('/callstoreprocedure')
  @Get('/callstoreprocedure')
  async callStoreProcedure(@Body() reqbody: any) {
    // return await this.userService.callStoreProcedure(reqbody.the_input_paramenter)
    return await this.userService.callStoreProcedure('lll');
  }
}
