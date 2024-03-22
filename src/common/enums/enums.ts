export enum ClientEnum {
  PROFILE = 'PROFILE',
  PUBLISHER = 'PUBLISHER_PACKAGE',
  POSTS = 'POSTS_PACKAGE',
  CATEGORIES = 'CATEGORIES_PACKAGE',
  SUBJECTS = 'SUBJECTS_PACKAGE',
  ADVERTISING = 'ADVERTISING_PACKAGE',
  BANNERS = 'BANNERS_PACKAGE',
  VIDEOS = 'VIDEOS_PACKAGE',
  TYPES = 'TYPES_PACKAGE',
  ACTION_TYPES = 'ACTION_TYPES_PACKAGE',
  HASHTAGS = 'ACTION_HASHTAGS',
}

export enum PackageEnum {
  AREA = 'areas',
  SKILL = 'skills',
  NEWS = 'news',
  COUNTRY = 'countries',
  CITY = 'cities',
  ACQUISITION = 'acquisitions',
  ALBUM = 'albums',
  EDUCATION = 'educations',
  EXPERIENCE = 'experiences',
  FUNDING = 'fundingRounds',
  INDUSTRY = 'industries',
  IPOSTOCK = 'ipoStocks',
  JOBTITLE = 'jobTitles',
  MERGE = 'merges',
  PRODUCT = 'products',
  PROFILE = 'profiles',
  SERVICE = 'services',
  TRANSFER = 'transfers',
  USER = 'users',
  COMPANY = 'companies',
  SOCIAL = 'socials',
  CONNECTION = 'connections',
  CAMPAIGN = 'campaigns',
  RECENT_NEW = 'recentNews',
  SCHOOL = 'schools',
  STATISTIC = 'statistic',
  PRODUCT_TYPE = 'productTypes',
  ARCHIVE_RECORD = 'archiveRecords',
}

export enum ServicesEnum {
  AREA = 'AreaService',
  SKILL = 'SkillService',
  PUBLISHER = 'PublisherServiceGrpc',
  POSTS = 'PostsServiceGRPC',
  CATEGORIES = 'CategoriesServiceGrpc',
  SUBJECTS = 'SubjectsServiceGrpc',
  ADVERTISING = 'AdvertisingServiceGrpc',
  CITY = 'CityService',
  COUNTRY = 'CountryService',
  ACQUISITION = 'AcquisitionService',
  ALBUM = 'AlbumService',
  EDUCATION = 'EducationService',
  EXPERIENCE = 'ExperienceService',
  FUNDING = 'FundingRoundService',
  INDUSTRY = 'IndustryService',
  IPOSTOCK = 'IpoStockService',
  JOBTITLE = 'JobTitleService',
  MERGE = 'MergeService',
  PRODUCT = 'ProductService',
  PROFILE = 'ProfileService',
  SERVICE = 'ServiceService',
  TRANSFER = 'TransferService',
  USER = 'UserService',
  COMPANY = 'CompanyService',
  BANNERS = 'BannersServiceGRPC',
  VIDEOS = 'VideosServiceGRPC',
  TYPES = 'TypesServiceGrpc',
  ACTION_TYPES = 'ActionTypesServiceGrpc',
  SOCIAL = 'SocialService',
  HASHTAGS = 'HashTagServiceGrpc',
  CONNECTION = 'ConnectionService',
  CAMPAIGN = 'CampaignService',
  RECENT_NEW = 'RecentNewService',
  SCHOOL = 'SchoolService',
  STATISTIC = 'StatisticService',
  PRODUCT_TYPE = 'ProductTypeService',
  ARCHIVE_RECORD = 'ArchiveRecordService',
}

export enum StateEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DECLINE = 'DECLINE',
  CANCELED = 'CANCELLED',
  PENDING_UPDATED = 'PENDING_UPDATED',
  REJECT = 'REJECT',
}

export enum OrgMajorEnum {
  COMPANY = 'COMPANY',
  INCUBATOR = 'INCUBATOR',
  VENTURE_CAPITAL = 'VENTURE CAPITAL',
  HUB = 'HUB',
  SCHOOL = 'SCHOOL',
  OTHER = 'OTHER',
}

export enum DegreeTypeEnum {
  BACHELOR = 'Bachelor',
  DIPLOMA = 'Diploma',
  OTHER = 'Other',
}
export enum EmploymentTypeEnum {
  FULLTIME = 'FULL-TIME',
  PARTTIME = 'PART-TIME',
  OTHER = 'OTHER',
}

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
  PREIPO = 'Pre-IPO',
  IPO = 'IPO',
  POSTIPO = 'Post-IPO',
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

export enum CognitoGroupEnum {
  ADMIN = 'Admin',
  INDIVIDUAL = 'Individual',
  ORGANIZATION = 'Organization',
}

export enum MainAreEnum {
  AMERICA = 'Americas',
  ASIA_PACIFIC = 'Asia Pacific',
  EUROPE = 'Europe',
  MIDDLE_EAST_AFRICA = 'Middle East/Africa',
}
