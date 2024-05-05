import { Module } from '@nestjs/common';
import { GhatService } from './ghat.service';
import { GhatController } from './ghat.controller';
import { PrismaService } from '../../services/prisma.service';

@Module({
  controllers: [GhatController],
  providers: [GhatService, PrismaService],
})
export class GhatModule {}
