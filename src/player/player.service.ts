import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  create(createPlayerDto: CreatePlayerDto) {
    const { teamId, name, pot, playerImage } = createPlayerDto;

    return this.prisma.player.create({
      data: {
        name,
        pot,
        playerImage: playerImage ?? null,
        teamId: teamId ?? null,
      },
    });
  }

  findAll() {
    return this.prisma.player.findMany({});
  }

  findOne(id: string) {
    return this.prisma.player.findFirst({
      where: { id }
    });
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return this.prisma.player.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  remove(id: string) {
    return this.prisma.player.delete({
      where: { id },
    });
  }
}
