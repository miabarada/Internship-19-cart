import { Body, Controller, Get, Put, Request, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UserAuthGuard } from '../user/user-auth.guard';

@Controller('users')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('me')
  @UseGuards(UserAuthGuard)
  getMe(@Request() req) {
    return this.profileService.findMe(req.user.id);
  }

  @Put('me')
  @UseGuards(UserAuthGuard)
  updateMe(@Request() req, @Body() dto: UpdateProfileDto) {
    return this.profileService.updateMe(req.user.id, dto)
  }
}
