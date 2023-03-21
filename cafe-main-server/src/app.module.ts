import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { ProductModule } from './product/product.module';
import { IngredientModule } from './product/ingredient/ingredient.module';
import { AllergenModule } from './allergen/allergen.module';
import { AddressModule } from './address/address.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    AuthModule,
    UserModule,
    MenuModule,
    ProductModule,
    IngredientModule,
    AllergenModule,
    AddressModule,
  ],
})
export class AppModule {}
