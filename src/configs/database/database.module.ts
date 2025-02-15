import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'tpf_db',
      port: 3307,
      username: 'tpf',
      password: 'tpf',
      database: 'tpf',
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
