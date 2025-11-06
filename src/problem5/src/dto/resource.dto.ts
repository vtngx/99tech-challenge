import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateResourceDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  type!: string;
}

export class UpdateResourceDto {
  @IsUUID()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  type?: string;
}

export class ResourceResponseDto {
  id!: string;
  name!: string;
  description?: string;
  type!: string;
  createdAt?: Date;
  updatedAt?: Date;
}
