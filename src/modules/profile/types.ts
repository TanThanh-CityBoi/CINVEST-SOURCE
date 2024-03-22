import { TBaseAbstract } from '../../common/base/base.interface';
import { TPagination } from '../../common/base/pagination.interface';
import { GenderEnum, IndMajorEnum } from '../../common/enums/enums';
import { TAlbum } from '../album/types';
import {
  TCompanyChiefMapping,
  TCompanyDirectorMapping,
  TCompanyFounderMapping,
} from '../company/types';
import { TEducation } from '../education/types';
import { TExperience } from '../experience/types';
import { TRecentNew } from '../recentNews/types';
import { TSocial } from '../socials/types';

export interface TSkillMapping extends TBaseAbstract {
  profileId?: number;
  skillId?: number;
}

export interface TNicheIndustryMapping extends TBaseAbstract {
  profileId?: number;
  industryId?: number;
}

export interface TInvestLocationMapping extends TBaseAbstract {
  profileId?: number;
  countryId?: number;
}

export interface TProfile extends TBaseAbstract {
  connect?: number;
  follow?: number;
  follower?: number;
  firstName?: string;
  lastName?: string;
  gender?: GenderEnum;
  type?: IndMajorEnum;
  dob?: Date;
  cityId?: number;
  description?: string;
  investDescription?: string;
  userId?: number;
  profileInvestMentId?: number;
  albums?: TAlbum[];
  skills?: TSkillMapping[];
  educations?: TEducation[];
  experiences?: TExperience[];
  foundedCompanies?: TCompanyFounderMapping[];
  directorCompanies?: TCompanyDirectorMapping[];
  chiefCompanies?: TCompanyChiefMapping[];
  socials?: TSocial[];
  dobYear?: string;
  id_number?: string;
  recentNews?: TRecentNew[];
  minRange?: number;
  maxRange?: number;
  niches?: TNicheIndustryMapping[];
  investLocations?: TInvestLocationMapping[];
  // transfers?: TTransfer[];
  // exits?: TExit[];
}

export interface TQueryProfile extends TProfile, TPagination {
  ids?: number;
}
