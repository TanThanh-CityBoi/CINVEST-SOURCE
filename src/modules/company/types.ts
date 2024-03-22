import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { OrgMajorEnum } from '../../common/enums/enums';
import { TAlbum } from '../album/types';
import { THashtagCreateRequest } from '../campaign/types';
import { TExit } from '../exit/type';
import { TFundingRound } from '../fundingRound/types';
import { TIpoStock } from '../ipoStock/types';
import { TRecentNew } from '../recentNews/types';
import { TSocial } from '../socials/types';
import { TTransfer } from '../transfer/type';

export interface TCompanyInvestmentMapping extends TBaseAbstract {
  investmentId?: number;
  companyId?: number;
  investorId?: number;
}

export interface TCompanyInvestedMapping extends TBaseAbstract {
  companyId?: number;
  albumId?: number;
}

export interface TCompanyFounderMapping extends TBaseAbstract {
  companyId?: number;
  founderId?: number;
}

export interface TCompanyDirectorMapping extends TBaseAbstract {
  companyId?: number;
  directorId?: number;
}

export interface TCompanyChiefMapping extends TBaseAbstract {
  companyId?: number;
  chiefId?: number;
}

export interface TCompanyPeopleMapping extends TBaseAbstract {
  companyId?: number;
  profileId?: number;
  jobTitleId?: number;
}

export interface TCompanyCooperationMapping extends TBaseAbstract {
  companyId?: number;
  cooperationId?: number;
  description?: string;
  date?: Date;
  isCustomer?: boolean;
}

export interface TCompanyIndustryMapping extends TBaseAbstract {
  companyId?: number;
  industryId?: number;
  isMain?: boolean;
}

export interface TCompanyNicheIndustryMapping extends TBaseAbstract {
  companyId?: number;
  industryId?: number;
}

export interface TCompanyInvestLocationMapping extends TBaseAbstract {
  companyId?: number;
  countryId?: number;
}

export interface TCompany extends TBaseAbstract {
  name?: string;
  secondName?: string;
  type?: OrgMajorEnum;
  authorizedCapital?: number;
  registerDate?: Date;
  deregisterDate?: Date;
  description?: string;
  taxNumber?: string;
  contactNumber?: string;
  establishmentDecision?: string;
  responsibleAuthority?: string;
  employeeNumber?: number;
  headquarterPlaceId?: number;
  managementPlaceId?: number;
  taxPlaceId?: number;
  userId?: number;
  ipoStockId?: number;
  parentId?: number;
  minRange?: number;
  maxRange?: number;
  founders?: TCompanyFounderMapping[];
  directors?: TCompanyDirectorMapping[];
  chiefs?: TCompanyChiefMapping[];
  albums?: TAlbum[];
  transfers?: TTransfer[];
  exits?: TExit[];
  investedCompanies?: TCompanyInvestmentMapping[];
  investorCompanies?: TCompanyInvestmentMapping[];
  fundingRounds?: TFundingRound[];
  acquirerFR?: TFundingRound[];
  people?: TCompanyPeopleMapping[];
  cooperations?: TCompanyCooperationMapping[];
  parent?: TCompany;
  ipoStock?: TIpoStock;
  industries?: TCompanyIndustryMapping[];
  socials?: TSocial[];
  hashtags?: THashtagCreateRequest[];
  recentNews?: TRecentNew[];
  niches?: TCompanyNicheIndustryMapping[];
  investLocations?: TCompanyInvestLocationMapping[];
}

export interface TQueryCompany extends TCompany, TPagination {
  ids?: number[];
}
