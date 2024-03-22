import { FindOptionsRelations } from 'typeorm';
import { CompanyCooperationMappingEntity } from '../company/entities/c-cooperateion-mapping.entity';

export const listRelations: FindOptionsRelations<CompanyCooperationMappingEntity> =
  {};

export const byIdrelations: FindOptionsRelations<CompanyCooperationMappingEntity> =
  {
    cooperation: true,
  };
