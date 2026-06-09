import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Genero } from '@prisma/client';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Inception' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Um ladrão que rouba sonhos.' })
  @IsString()
  @IsNotEmpty()
  sinopse: string;

  @ApiProperty({ example: '14 anos' })
  @IsString()
  @IsNotEmpty()
  classificacao: string;

  @ApiProperty({ example: 148 })
  @IsInt()
  duracao: number;

  @ApiProperty({ example: 'Leonardo DiCaprio' })
  @IsString()
  @IsNotEmpty()
  elenco: string;

  @ApiProperty({ enum: Genero, example: Genero.ACAO })
  @IsEnum(Genero)
  genero: Genero;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  @IsDateString()
  dataIniciaExibicao: string;

  @ApiProperty({ example: '2024-03-01T00:00:00.000Z' })
  @IsDateString()
  dataFinalExibicao: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId: number;
}
