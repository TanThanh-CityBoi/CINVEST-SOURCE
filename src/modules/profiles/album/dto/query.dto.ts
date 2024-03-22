import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { BaseGetPaginateDto } from 'src/common/dto/base-get.dto';

export class QueryAlbumDto extends BaseGetPaginateDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name?: string;
}
