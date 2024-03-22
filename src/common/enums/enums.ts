export enum InvestmentTypeEnum {
  EQUITY = 'Equity',
  ACQUISITION = 'Acquisition',
  MA = 'MA',
}

export enum FundingRoundEnum {
  ALL = 'All',
  PRESEED = 'Pre-seed',
  SEED = 'Seed',
  A = 'SERIES A',
  B = 'SERIES B',
  C = 'SERIES C',
  D = 'SERIES D',
  D_PLUS = 'SERIES D+',
  PREIPO = 'Pre-IPO',
  IPO = 'IPO',
  POSTIPO = 'Post-IPO',
}

export enum SQLEnum {
  CREATE = 'CREATE TABLE IF NOT EXISTS',
  DROP = 'DROP TABLE IF EXISTS',
}

export enum PATH {
  USERS = '/users',
  FILES = '/files',
  RELATED_HUB = '/related-hubs',
  INVESTMENT = '/investments',
  ACQUISITION = '/acquisitions',
  TRANSFER = '/transfers',
  EXIT = '/exits',
  PROFILE_INVESTMENT = '/profile-investments',
  PROFILE_SUMMARY = '/profile-summary',
  PROFILE = '/profiles',
  SKILL = '/skills',
  EDUCATION = '/educations',
  ALBUM = '/albums',
  EXPERIENCE = '/experiences',
  COUNTRY = '/countries',
  CITY = '/cities',
  COMPANY = '/companies',
  JOBTITLE = '/job-titles',
  INDUSTRY = '/industries',
  FUNDING = '/funding-rounds',
  SERVICES = '/services',
  PRODUCTS = '/products',
  MERGES = '/merges',
  IPOSTOCK = '/ipo-stocks',
  AREA = '/areas',
  STATISTICS = '/statistics',
}

export enum StateEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELED = 'CANCELLED',
  PENDING_UPDATED = 'PENDING_UPDATED',
}

export enum RoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum ProfileTypeEnum {
  IND = 'INDIVIDUAL',
  ORG = 'ORGANIZATION',
}

export enum IndMajorEnum {
  PERSONAL = 'PERSONAL',
  INVESTOR = 'INVESTOR',
  PARTNER = 'INVESTMENT PARTNER',
}

export enum OrgMajorEnum {
  COMPANY = 'COMPANY',
  INCUBATOR = 'INCUBATOR',
  VENTURE_CAPITAL = 'VENTURE CAPITAL',
  HUB = 'HUB',
  SCHOOL = 'SCHOOL',
  OTHER = 'OTHER',
}

export enum EmploymentTypeEnum {
  FULLTIME = 'FULL-TIME',
  PARTTIME = 'PART-TIME',
  OTHER = 'OTHER',
}

export enum DegreeTypeEnum {
  BACHELOR = 'Bachelor',
  DIPLOMA = 'Diploma',
  OTHER = 'Other',
}

export enum GenderEnum {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum ProductMajor {
  LIFESTYLE = 'LIFESTYLE',
  FMCG = 'FMCG',
  EL = 'EL',
  FASHION = 'FASHION',
  OTHER = 'OTHER',
}

export enum ProtoFilePath {
  SKILL = './src/proto/proto/skill.proto',
  CITY = './src/proto/proto/city.proto',
  COUNTRY = './src/proto/proto/country.proto',
  USERS = './src/proto/proto/user.proto',
  FILES = './src/proto/proto/file.proto',
  ACQUISITION = './src/proto/proto/acquisition.proto',
  TRANSFER = './src/proto/proto/transfer.proto',
  EXIT = './src/proto/proto/exit.proto',
  PROFILE = './src/proto/proto/profile.proto',
  EDUCATION = './src/proto/proto/education.proto',
  ALBUM = './src/proto/proto/album.proto',
  EXPERIENCE = './src/proto/proto/experience.proto',
  COMPANY = './src/proto/proto/company.proto',
  JOBTITLE = './src/proto/proto/jobTitle.proto',
  INDUSTRY = './src/proto/proto/industry.proto',
  FUNDING = './src/proto/proto/fundingRound.proto',
  SERVICES = './src/proto/proto/service.proto',
  PRODUCTS = './src/proto/proto/product.proto',
  MERGES = './src/proto/proto/merge.proto',
  IPOSTOCK = './src/proto/proto/ipoStock.proto',
  SOCIAL = './src/proto/proto/social.proto',
  CONNECTION = './src/proto/proto/connection.proto',
  CAMPAIGN = './src/proto/proto/campaign.proto',
  AREA = './src/proto/proto/area.proto',
  RECENTNEW = './src/proto/proto/recentNew.proto',
  SCHOOL = './src/proto/proto/school.proto',
  DOCUMENT = './src/proto/proto/documents.proto',
  HASHTAG = './src/proto/proto/hashtags.proto',
  STATISTIC = './src/proto/proto/statistic.proto',
  FAQ = './src/proto/proto/faq.proto',
  PRODUCT_TYPE = './src/proto/proto/productType.proto',
  COOPERATION = './src/proto/proto/cooperation.proto',
  ARCHIVE_RECORD = './src/proto/proto/archiveRecord.proto',
}

export enum MainAreEnum {
  AMERICA = 'Americas',
  ASIA_PACIFIC = 'Asia Pacific',
  EUROPE = 'Europe',
  MIDDLE_EAST_AFRICA = 'Middle East/Africa',
}
