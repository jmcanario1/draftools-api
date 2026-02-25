import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  pot: number;

  @IsString()
  @IsOptional()
  playerImage: string;

  @IsUUID()
  @IsOptional()
  teamId: string;
}
