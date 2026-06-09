import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreateIngressoDto {
  @ApiProperty({ example: 30.0 })
  @IsNumber()
  valorInteira: number;

  @ApiProperty({ example: 15.0 })
  @IsNumber()
  valorMeia: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  sessaoId: number;
}
