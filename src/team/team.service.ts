import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    const { name, teamLogo } = createTeamDto;
    return this.prisma.team.create({
      data: {
        name: name,
        teamLogo: teamLogo ?? null,
      }
    });
  }

  findAll() {
    return this.prisma.team.findMany();
  }

  findOne(id: string) {
    return this.prisma.team.findFirst({
      where: { id }
    });
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    return this.prisma.team.update({
      where: { id },
      data: updateTeamDto
    });
  }

  remove(id: string) {
    return this.prisma.team.delete({
      where: { id }
    });
  }
}
