import { Module } from '@nestjs/common';
import { PlayerModule } from '../player/player.module';
import { PrismaModule } from '../prisma/prisma.module';
import { TeamModule } from '../team/team.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PrismaModule,
    TeamModule,
    PlayerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
