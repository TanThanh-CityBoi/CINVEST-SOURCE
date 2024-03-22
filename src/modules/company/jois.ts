import Joi from 'joi';

import { baseSchema, paginationSchema } from '../../common/base/pagination.joi';
import { OrgMajorEnum } from '../../common/enums/enums';
import { albumSchema } from '../album/jois';
import { exitSchema } from '../exit/jois';
import { transferSchema } from '../transfer/jois';

export const companySchemas = {
  investedCompanymappingSchema: Joi.object({
    investmentId: Joi.string().optional(),
    companyId: Joi.string().optional(),
    investorId: Joi.string().optional(),
  }).append(baseSchema),
  interestedMapping: Joi.object({
    companyId: Joi.number().optional(),
    albumId: Joi.number().optional(),
  }).append(baseSchema),
  founderMapping: Joi.object({
    companyId: Joi.number().optional(),
    founderId: Joi.number().optional(),
  }).append(baseSchema),
  directorMapping: Joi.object({
    companyId: Joi.number().optional(),
    directorId: Joi.number().optional(),
  }).append(baseSchema),
  chiefMapping: Joi.object({
    companyId: Joi.number().optional(),
    chiefId: Joi.number().optional(),
  }).append(baseSchema),
  peopleMapping: Joi.object({
    companyId: Joi.number().optional(),
    profileId: Joi.number().optional(),
    jobTitleId: Joi.number().optional(),
  }).append(baseSchema),
  cooperationsMapping: Joi.object({
    companyId: Joi.number().optional(),
    cooperationId: Joi.number().optional(),
    description: Joi.string().optional(),
    date: Joi.date().optional(),
  }).append(baseSchema),
};

export const companySchema = Joi.object({
  name: Joi.string().optional(),
  secondName: Joi.string().optional(),
  hashtag: Joi.string().optional(),
  type: Joi.string()
    .valid(
      OrgMajorEnum.COMPANY,
      OrgMajorEnum.INCUBATOR,
      OrgMajorEnum.VENTURE_CAPITAL,
      OrgMajorEnum.HUB,
      OrgMajorEnum.SCHOOL,
      OrgMajorEnum.OTHER,
    )
    .optional(),
  authorizedCapital: Joi.number().optional(),
  registerDate: Joi.date().optional(),
  deregisterDate: Joi.date().optional(),
  description: Joi.string().optional(),
  taxNumber: Joi.string().optional(),
  contactNumber: Joi.string().optional(),
  establishmentDecision: Joi.string().optional(),
  responsibleAuthority: Joi.string().optional(),
  employeeNumber: Joi.number().optional(),
  streetAddress: Joi.string().optional(),
  wardId: Joi.number().optional(),
  districtId: Joi.number().optional(),
  headquarterPlaceId: Joi.number().optional(),
  managementPlaceId: Joi.number().optional(),
  taxPlaceId: Joi.number().optional(),
  userId: Joi.number().optional(),
  ipoStockId: Joi.number().optional(),
  parentId: Joi.number().optional(),
  albums: Joi.array().items(albumSchema).optional(),
  founders: Joi.array().items(companySchemas.founderMapping).optional(),
  directors: Joi.array().items(companySchemas.directorMapping).optional(),
  chiefs: Joi.array().items(companySchemas.chiefMapping).optional(),
  people: Joi.array().items(companySchemas.peopleMapping).optional(),
  cooperations: Joi.array()
    .items(companySchemas.cooperationsMapping)
    .optional(),
  transfers: Joi.array().items(transferSchema).optional(),
  exit: Joi.array().items(exitSchema).optional(),
}).append(baseSchema);
export const queryCompanySchema = companySchema.append(paginationSchema);
