import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  numero: number;

  @ApiProperty({ example: 100 })
  @IsInt()
  capacidade: number;

  @ApiProperty({ example: [10, 20, 30] })
  @IsArray()
  poltronas: number[];

  @ApiProperty({ example: 1 })
  @IsInt()
  cinemaId: number;
}
