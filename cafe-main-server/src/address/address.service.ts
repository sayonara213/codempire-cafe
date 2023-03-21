import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Address } from './entity/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private readonly userService: UserService,
  ) {}

  async createAddressForUser(
    userId: string,
    addressData: Partial<Address>,
  ): Promise<Address> {
    const user = await this.userService.findById(userId);
    const newAddress = this.addressRepository.create({ ...addressData, user });
    return await this.addressRepository.save(newAddress);
  }

  async findByUserId(userId: string): Promise<Address[]> {
    const user = await this.userService.findAddressByUserId(userId);
    return user.addresses;
  }

  async getAddressById(addressId: string): Promise<Address> {
    return this.addressRepository.findOne({ where: { id: addressId } });
  }

  async toggleAddressActive(
    addressId: string,
    isActive: boolean,
  ): Promise<Address> {
    const address = await this.getAddressById(addressId);
    address.isActive = isActive;
    return await this.addressRepository.save(address);
  }
}
