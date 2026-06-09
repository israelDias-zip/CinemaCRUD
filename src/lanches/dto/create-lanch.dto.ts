import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateLanchDto {
  @ApiProperty({ example: 'Combo Pipoca Grande' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'Pipoca grande + refrigerante' })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: 25.0 })
  @IsNumber()
  valorUnitario: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  qtUnidade: number;

  @ApiProperty({ example: 50.0 })
  @IsNumber()
  subtotal: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  pedidoId: number;
}
