// Original file: src/proto/proto/profile.proto

import type { User as _users_User, User__Output as _users_User__Output } from '../users/User';
import type { Album as _albums_Album, Album__Output as _albums_Album__Output } from '../albums/Album';
import type { ProfileSkillMapping as _profiles_ProfileSkillMapping, ProfileSkillMapping__Output as _profiles_ProfileSkillMapping__Output } from '../profiles/ProfileSkillMapping';
import type { Education as _educations_Education, Education__Output as _educations_Education__Output } from '../educations/Education';
import type { Experience as _experiences_Experience, Experience__Output as _experiences_Experience__Output } from '../experiences/Experience';
import type { City as _cities_City, City__Output as _cities_City__Output } from '../cities/City';
import type { CompanyFounderMapping as _companies_CompanyFounderMapping, CompanyFounderMapping__Output as _companies_CompanyFounderMapping__Output } from '../companies/CompanyFounderMapping';
import type { CompanyDirectorMapping as _companies_CompanyDirectorMapping, CompanyDirectorMapping__Output as _companies_CompanyDirectorMapping__Output } from '../companies/CompanyDirectorMapping';
import type { CompanyChiefMapping as _companies_CompanyChiefMapping, CompanyChiefMapping__Output as _companies_CompanyChiefMapping__Output } from '../companies/CompanyChiefMapping';
import type { Transfer as _transfers_Transfer, Transfer__Output as _transfers_Transfer__Output } from '../transfers/Transfer';
import type { Exit as _exits_Exit, Exit__Output as _exits_Exit__Output } from '../exits/Exit';
import type { CompanyPeopleMapping as _companies_CompanyPeopleMapping, CompanyPeopleMapping__Output as _companies_CompanyPeopleMapping__Output } from '../companies/CompanyPeopleMapping';
import type { FundingInvestorMapping as _fundingRounds_FundingInvestorMapping, FundingInvestorMapping__Output as _fundingRounds_FundingInvestorMapping__Output } from '../fundingRounds/FundingInvestorMapping';
import type { Social as _socials_Social, Social__Output as _socials_Social__Output } from '../socials/Social';
import type { RecentNew as _recentNews_RecentNew, RecentNew__Output as _recentNews_RecentNew__Output } from '../recentNews/RecentNew';
import type { ProfileInvestLocationMapping as _profiles_ProfileInvestLocationMapping, ProfileInvestLocationMapping__Output as _profiles_ProfileInvestLocationMapping__Output } from '../profiles/ProfileInvestLocationMapping';
import type { ProfileNicheIndustryMapping as _profiles_ProfileNicheIndustryMapping, ProfileNicheIndustryMapping__Output as _profiles_ProfileNicheIndustryMapping__Output } from '../profiles/ProfileNicheIndustryMapping';

export interface Profile {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'gender'?: (string);
  'type'?: (string);
  'dob'?: (string);
  'cityId'?: (number);
  'description'?: (string);
  'investDescription'?: (string);
  'userId'?: (number);
  'user'?: (_users_User | null);
  'albums'?: (_albums_Album)[];
  'skills'?: (_profiles_ProfileSkillMapping)[];
  'educations'?: (_educations_Education)[];
  'experiences'?: (_experiences_Experience)[];
  'city'?: (_cities_City | null);
  'foundedCompanies'?: (_companies_CompanyFounderMapping)[];
  'directorCompanies'?: (_companies_CompanyDirectorMapping)[];
  'chiefCompanies'?: (_companies_CompanyChiefMapping)[];
  'transfers'?: (_transfers_Transfer)[];
  'exits'?: (_exits_Exit)[];
  'companies'?: (_companies_CompanyPeopleMapping)[];
  'investedFundingRounds'?: (_fundingRounds_FundingInvestorMapping)[];
  'leadFundingRounds'?: (_fundingRounds_FundingInvestorMapping)[];
  'socials'?: (_socials_Social)[];
  'dobYear'?: (string);
  'id_number'?: (string);
  'recentNews'?: (_recentNews_RecentNew)[];
  'minRange'?: (number | string);
  'maxRange'?: (number | string);
  'investLocations'?: (_profiles_ProfileInvestLocationMapping)[];
  'niches'?: (_profiles_ProfileNicheIndustryMapping)[];
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_firstName'?: "firstName";
  '_lastName'?: "lastName";
  '_gender'?: "gender";
  '_type'?: "type";
  '_dob'?: "dob";
  '_cityId'?: "cityId";
  '_description'?: "description";
  '_investDescription'?: "investDescription";
  '_userId'?: "userId";
  '_user'?: "user";
  '_city'?: "city";
  '_dobYear'?: "dobYear";
  '_id_number'?: "id_number";
  '_minRange'?: "minRange";
  '_maxRange'?: "maxRange";
}

export interface Profile__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'firstName'?: (string);
  'lastName'?: (string);
  'gender'?: (string);
  'type'?: (string);
  'dob'?: (string);
  'cityId'?: (number);
  'description'?: (string);
  'investDescription'?: (string);
  'userId'?: (number);
  'user'?: (_users_User__Output | null);
  'albums': (_albums_Album__Output)[];
  'skills': (_profiles_ProfileSkillMapping__Output)[];
  'educations': (_educations_Education__Output)[];
  'experiences': (_experiences_Experience__Output)[];
  'city'?: (_cities_City__Output | null);
  'foundedCompanies': (_companies_CompanyFounderMapping__Output)[];
  'directorCompanies': (_companies_CompanyDirectorMapping__Output)[];
  'chiefCompanies': (_companies_CompanyChiefMapping__Output)[];
  'transfers': (_transfers_Transfer__Output)[];
  'exits': (_exits_Exit__Output)[];
  'companies': (_companies_CompanyPeopleMapping__Output)[];
  'investedFundingRounds': (_fundingRounds_FundingInvestorMapping__Output)[];
  'leadFundingRounds': (_fundingRounds_FundingInvestorMapping__Output)[];
  'socials': (_socials_Social__Output)[];
  'dobYear'?: (string);
  'id_number'?: (string);
  'recentNews': (_recentNews_RecentNew__Output)[];
  'minRange'?: (number);
  'maxRange'?: (number);
  'investLocations': (_profiles_ProfileInvestLocationMapping__Output)[];
  'niches': (_profiles_ProfileNicheIndustryMapping__Output)[];
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_firstName': "firstName";
  '_lastName': "lastName";
  '_gender': "gender";
  '_type': "type";
  '_dob': "dob";
  '_cityId': "cityId";
  '_description': "description";
  '_investDescription': "investDescription";
  '_userId': "userId";
  '_user': "user";
  '_city': "city";
  '_dobYear': "dobYear";
  '_id_number': "id_number";
  '_minRange': "minRange";
  '_maxRange': "maxRange";
}
