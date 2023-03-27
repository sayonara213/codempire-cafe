import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { API } from 'src/constants/endpoints';
import { AddressService } from './address.service';
import { Address } from './entity/address.entity';

@Controller(API.ADDRESS)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(API.ID_PARAM)
  async createAddressForUser(
    @Param('id') id: string,
    @Body() addressData: Partial<Address>,
  ): Promise<Address> {
    return this.addressService.createAddressForUser(id, addressData);
  }

  @Get(API.ID_PARAM)
  async getAddressById(@Param('id') id: string): Promise<Address> {
    return this.addressService.getById(id);
  }

  @Get(API.USER + API.ID_PARAM)
  async findByUserId(@Param('id') id: string): Promise<Address[]> {
    return this.addressService.getByUserId(id);
  }

  @Put(API.ID_PARAM)
  async toggleAddressActive(
    @Param('id') id: string,
    @Body('isActive') isActive: boolean,
  ): Promise<Address> {
    return this.addressService.toggleAddressActive(id, isActive);
  }

  @Delete(API.ID_PARAM)
  async deleteAddress(@Param('id') id: string): Promise<Address> {
    return this.addressService.deleteAddress(id);
  }
}
