import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  playerImage: string;

  @IsUUID()
  @IsOptional()
  teamId: string;
}
