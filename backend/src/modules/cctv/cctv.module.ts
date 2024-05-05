import { Module } from '@nestjs/common';
import { CctvService } from './cctv.service';
import { CctvController } from './cctv.controller';
import { PrismaService } from '@services/prisma.service';

@Module({
  controllers: [CctvController],
  providers: [CctvService, PrismaService],
})
export class CctvModule {}
