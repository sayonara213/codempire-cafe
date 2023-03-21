export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  image: string;
  addresses: IAddress[];
}

export interface IAddress {
  id: string;
  addressName: string;
  isActive: boolean;
}
