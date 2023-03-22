import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './entity/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':userId')
  async createAddressForUser(
    @Param('userId') userId: string,
    @Body() addressData: Partial<Address>,
  ): Promise<Address> {
    return this.addressService.createAddressForUser(userId, addressData);
  }

  @Get(':addressId')
  async getAddressById(
    @Param('addressId') addressId: string,
  ): Promise<Address> {
    return this.addressService.getAddressById(addressId);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string): Promise<Address[]> {
    return this.addressService.findByUserId(userId);
  }

  @Put(':addressId')
  async toggleAddressActive(
    @Param('addressId') addressId: string,
    @Body('isActive') isActive: boolean,
  ): Promise<Address> {
    return this.addressService.toggleAddressActive(addressId, isActive);
  }

  @Delete(':addressId')
  async deleteAddress(@Param('addressId') addressId: string): Promise<Address> {
    return this.addressService.deleteAddress(addressId);
  }
}
