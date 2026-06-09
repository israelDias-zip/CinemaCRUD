import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cine Centro' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Rua das Flores, 100' })
  @IsString()
  @IsNotEmpty()
  endereco: string;
}
