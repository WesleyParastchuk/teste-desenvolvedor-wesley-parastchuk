import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class ItemDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
