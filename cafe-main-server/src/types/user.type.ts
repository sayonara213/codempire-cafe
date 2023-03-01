export interface IUser {
  id: string;
  email: string;
  role: string;
  password: string;
  name: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
