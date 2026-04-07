import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() { email, password, fullName }: RegisterDto) {
    return this.userService.register(email, password, fullName)
  }

  @Post('login')
  login(@Body() { email, password }: LoginDto) {
    return this.userService.login(email, password);
  }
}
