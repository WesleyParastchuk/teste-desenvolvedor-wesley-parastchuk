import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}
