import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';

export class CreateSessoeDto {
  @ApiProperty({ example: '2024-06-01T20:00:00.000Z' })
  @IsDateString()
  horacrioExibicao: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  filmeId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  salaId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId: number;
}
