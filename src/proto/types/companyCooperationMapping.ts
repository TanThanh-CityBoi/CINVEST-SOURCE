import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AcquisitionServiceClient as _acquisitions_AcquisitionServiceClient, AcquisitionServiceDefinition as _acquisitions_AcquisitionServiceDefinition } from './acquisitions/AcquisitionService';
import type { AlbumServiceClient as _albums_AlbumServiceClient, AlbumServiceDefinition as _albums_AlbumServiceDefinition } from './albums/AlbumService';
import type { AreaServiceClient as _areas_AreaServiceClient, AreaServiceDefinition as _areas_AreaServiceDefinition } from './areas/AreaService';
import type { CampaignServiceClient as _campaigns_CampaignServiceClient, CampaignServiceDefinition as _campaigns_CampaignServiceDefinition } from './campaigns/CampaignService';
import type { CityServiceClient as _cities_CityServiceClient, CityServiceDefinition as _cities_CityServiceDefinition } from './cities/CityService';
import type { CompanyServiceClient as _companies_CompanyServiceClient, CompanyServiceDefinition as _companies_CompanyServiceDefinition } from './companies/CompanyService';
import type { ConnectionServiceClient as _connections_ConnectionServiceClient, ConnectionServiceDefinition as _connections_ConnectionServiceDefinition } from './connections/ConnectionService';
import type { CooperationServiceClient as _cooperations_CooperationServiceClient, CooperationServiceDefinition as _cooperations_CooperationServiceDefinition } from './cooperations/CooperationService';
import type { CountryServiceClient as _countries_CountryServiceClient, CountryServiceDefinition as _countries_CountryServiceDefinition } from './countries/CountryService';
import type { DocumentsServiceClient as _documents_DocumentsServiceClient, DocumentsServiceDefinition as _documents_DocumentsServiceDefinition } from './documents/DocumentsService';
import type { EducationServiceClient as _educations_EducationServiceClient, EducationServiceDefinition as _educations_EducationServiceDefinition } from './educations/EducationService';
import type { ExitServiceClient as _exits_ExitServiceClient, ExitServiceDefinition as _exits_ExitServiceDefinition } from './exits/ExitService';
import type { ExperienceServiceClient as _experiences_ExperienceServiceClient, ExperienceServiceDefinition as _experiences_ExperienceServiceDefinition } from './experiences/ExperienceService';
import type { FAQsServiceClient as _faq_FAQsServiceClient, FAQsServiceDefinition as _faq_FAQsServiceDefinition } from './faq/FAQsService';
import type { FileServiceClient as _files_FileServiceClient, FileServiceDefinition as _files_FileServiceDefinition } from './files/FileService';
import type { FundingRoundServiceClient as _fundingRounds_FundingRoundServiceClient, FundingRoundServiceDefinition as _fundingRounds_FundingRoundServiceDefinition } from './fundingRounds/FundingRoundService';
import type { IndustryServiceClient as _industries_IndustryServiceClient, IndustryServiceDefinition as _industries_IndustryServiceDefinition } from './industries/IndustryService';
import type { IpoStockServiceClient as _ipoStocks_IpoStockServiceClient, IpoStockServiceDefinition as _ipoStocks_IpoStockServiceDefinition } from './ipoStocks/IpoStockService';
import type { JobTitleServiceClient as _jobTitles_JobTitleServiceClient, JobTitleServiceDefinition as _jobTitles_JobTitleServiceDefinition } from './jobTitles/JobTitleService';
import type { MergeServiceClient as _merges_MergeServiceClient, MergeServiceDefinition as _merges_MergeServiceDefinition } from './merges/MergeService';
import type { ProductTypeServiceClient as _productTypes_ProductTypeServiceClient, ProductTypeServiceDefinition as _productTypes_ProductTypeServiceDefinition } from './productTypes/ProductTypeService';
import type { ProductServiceClient as _products_ProductServiceClient, ProductServiceDefinition as _products_ProductServiceDefinition } from './products/ProductService';
import type { ProfileServiceClient as _profiles_ProfileServiceClient, ProfileServiceDefinition as _profiles_ProfileServiceDefinition } from './profiles/ProfileService';
import type { RecentNewServiceClient as _recentNews_RecentNewServiceClient, RecentNewServiceDefinition as _recentNews_RecentNewServiceDefinition } from './recentNews/RecentNewService';
import type { SchoolServiceClient as _schools_SchoolServiceClient, SchoolServiceDefinition as _schools_SchoolServiceDefinition } from './schools/SchoolService';
import type { ServiceServiceClient as _services_ServiceServiceClient, ServiceServiceDefinition as _services_ServiceServiceDefinition } from './services/ServiceService';
import type { SkillServiceClient as _skills_SkillServiceClient, SkillServiceDefinition as _skills_SkillServiceDefinition } from './skills/SkillService';
import type { SocialServiceClient as _socials_SocialServiceClient, SocialServiceDefinition as _socials_SocialServiceDefinition } from './socials/SocialService';
import type { TransferServiceClient as _transfers_TransferServiceClient, TransferServiceDefinition as _transfers_TransferServiceDefinition } from './transfers/TransferService';
import type { UserServiceClient as _users_UserServiceClient, UserServiceDefinition as _users_UserServiceDefinition } from './users/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  acquisitions: {
    Acquisition: MessageTypeDefinition
    AcquisitionService: SubtypeConstructor<typeof grpc.Client, _acquisitions_AcquisitionServiceClient> & { service: _acquisitions_AcquisitionServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryAcquisition: MessageTypeDefinition
  }
  albums: {
    Album: MessageTypeDefinition
    AlbumService: SubtypeConstructor<typeof grpc.Client, _albums_AlbumServiceClient> & { service: _albums_AlbumServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryAlbum: MessageTypeDefinition
  }
  areas: {
    Area: MessageTypeDefinition
    AreaService: SubtypeConstructor<typeof grpc.Client, _areas_AreaServiceClient> & { service: _areas_AreaServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryArea: MessageTypeDefinition
  }
  bases: {
    CountResponse: MessageTypeDefinition
    DeleteResponse: MessageTypeDefinition
    Id: MessageTypeDefinition
  }
  campaigns: {
    Campaign: MessageTypeDefinition
    CampaignService: SubtypeConstructor<typeof grpc.Client, _campaigns_CampaignServiceClient> & { service: _campaigns_CampaignServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    HashTags: MessageTypeDefinition
    QueryCampaign: MessageTypeDefinition
  }
  cities: {
    City: MessageTypeDefinition
    CityService: SubtypeConstructor<typeof grpc.Client, _cities_CityServiceClient> & { service: _cities_CityServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryCity: MessageTypeDefinition
  }
  companies: {
    Company: MessageTypeDefinition
    CompanyChiefMapping: MessageTypeDefinition
    CompanyCooperationMapping: MessageTypeDefinition
    CompanyDirectorMapping: MessageTypeDefinition
    CompanyFounderMapping: MessageTypeDefinition
    CompanyIndustryMapping: MessageTypeDefinition
    CompanyInvestLocationMapping: MessageTypeDefinition
    CompanyNicheIndustryMapping: MessageTypeDefinition
    CompanyPeopleMapping: MessageTypeDefinition
    CompanyService: SubtypeConstructor<typeof grpc.Client, _companies_CompanyServiceClient> & { service: _companies_CompanyServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    HashTags: MessageTypeDefinition
    QueryCompany: MessageTypeDefinition
  }
  connections: {
    Connection: MessageTypeDefinition
    ConnectionService: SubtypeConstructor<typeof grpc.Client, _connections_ConnectionServiceClient> & { service: _connections_ConnectionServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryConnection: MessageTypeDefinition
  }
  cooperations: {
    Cooperation: MessageTypeDefinition
    CooperationService: SubtypeConstructor<typeof grpc.Client, _cooperations_CooperationServiceClient> & { service: _cooperations_CooperationServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryCooperation: MessageTypeDefinition
  }
  countries: {
    Country: MessageTypeDefinition
    CountryService: SubtypeConstructor<typeof grpc.Client, _countries_CountryServiceClient> & { service: _countries_CountryServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryCountry: MessageTypeDefinition
  }
  documents: {
    Document: MessageTypeDefinition
    DocumentsService: SubtypeConstructor<typeof grpc.Client, _documents_DocumentsServiceClient> & { service: _documents_DocumentsServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryDocument: MessageTypeDefinition
  }
  educations: {
    Education: MessageTypeDefinition
    EducationService: SubtypeConstructor<typeof grpc.Client, _educations_EducationServiceClient> & { service: _educations_EducationServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryEducation: MessageTypeDefinition
  }
  exits: {
    Exit: MessageTypeDefinition
    ExitService: SubtypeConstructor<typeof grpc.Client, _exits_ExitServiceClient> & { service: _exits_ExitServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryExit: MessageTypeDefinition
  }
  experiences: {
    Experience: MessageTypeDefinition
    ExperienceService: SubtypeConstructor<typeof grpc.Client, _experiences_ExperienceServiceClient> & { service: _experiences_ExperienceServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryExperience: MessageTypeDefinition
  }
  faq: {
    FAQ: MessageTypeDefinition
    FAQsService: SubtypeConstructor<typeof grpc.Client, _faq_FAQsServiceClient> & { service: _faq_FAQsServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QAndA: MessageTypeDefinition
    QueryFAQ: MessageTypeDefinition
  }
  files: {
    File: MessageTypeDefinition
    FileService: SubtypeConstructor<typeof grpc.Client, _files_FileServiceClient> & { service: _files_FileServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryFile: MessageTypeDefinition
  }
  fundingRounds: {
    DeleteInvestorRequest: MessageTypeDefinition
    FundingInvestorMapping: MessageTypeDefinition
    FundingRound: MessageTypeDefinition
    FundingRoundService: SubtypeConstructor<typeof grpc.Client, _fundingRounds_FundingRoundServiceClient> & { service: _fundingRounds_FundingRoundServiceDefinition }
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryFundingRound: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Any: MessageTypeDefinition
    }
  }
  industries: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    Industry: MessageTypeDefinition
    IndustryService: SubtypeConstructor<typeof grpc.Client, _industries_IndustryServiceClient> & { service: _industries_IndustryServiceDefinition }
    QueryIndustry: MessageTypeDefinition
  }
  ipoStocks: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    IpoStock: MessageTypeDefinition
    IpoStockService: SubtypeConstructor<typeof grpc.Client, _ipoStocks_IpoStockServiceClient> & { service: _ipoStocks_IpoStockServiceDefinition }
    QueryIpoStock: MessageTypeDefinition
  }
  jobTitles: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    JobTitle: MessageTypeDefinition
    JobTitleService: SubtypeConstructor<typeof grpc.Client, _jobTitles_JobTitleServiceClient> & { service: _jobTitles_JobTitleServiceDefinition }
    QueryJobTitle: MessageTypeDefinition
  }
  merges: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    Merge: MessageTypeDefinition
    MergeService: SubtypeConstructor<typeof grpc.Client, _merges_MergeServiceClient> & { service: _merges_MergeServiceDefinition }
    QueryMerge: MessageTypeDefinition
  }
  productTypes: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    ProductType: MessageTypeDefinition
    ProductTypeService: SubtypeConstructor<typeof grpc.Client, _productTypes_ProductTypeServiceClient> & { service: _productTypes_ProductTypeServiceDefinition }
    QueryProductType: MessageTypeDefinition
  }
  products: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    Product: MessageTypeDefinition
    ProductService: SubtypeConstructor<typeof grpc.Client, _products_ProductServiceClient> & { service: _products_ProductServiceDefinition }
    QueryProduct: MessageTypeDefinition
  }
  profiles: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    Profile: MessageTypeDefinition
    ProfileInvestLocationMapping: MessageTypeDefinition
    ProfileNicheIndustryMapping: MessageTypeDefinition
    ProfileService: SubtypeConstructor<typeof grpc.Client, _profiles_ProfileServiceClient> & { service: _profiles_ProfileServiceDefinition }
    ProfileSkillMapping: MessageTypeDefinition
    QueryProfile: MessageTypeDefinition
  }
  recentNews: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryRecentNew: MessageTypeDefinition
    RecentNew: MessageTypeDefinition
    RecentNewService: SubtypeConstructor<typeof grpc.Client, _recentNews_RecentNewServiceClient> & { service: _recentNews_RecentNewServiceDefinition }
  }
  schools: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QuerySchool: MessageTypeDefinition
    School: MessageTypeDefinition
    SchoolService: SubtypeConstructor<typeof grpc.Client, _schools_SchoolServiceClient> & { service: _schools_SchoolServiceDefinition }
  }
  services: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryService: MessageTypeDefinition
    Service: MessageTypeDefinition
    ServiceService: SubtypeConstructor<typeof grpc.Client, _services_ServiceServiceClient> & { service: _services_ServiceServiceDefinition }
  }
  skills: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QuerySkill: MessageTypeDefinition
    Skill: MessageTypeDefinition
    SkillService: SubtypeConstructor<typeof grpc.Client, _skills_SkillServiceClient> & { service: _skills_SkillServiceDefinition }
  }
  socials: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QuerySocial: MessageTypeDefinition
    Social: MessageTypeDefinition
    SocialService: SubtypeConstructor<typeof grpc.Client, _socials_SocialServiceClient> & { service: _socials_SocialServiceDefinition }
  }
  transfers: {
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    QueryTransfer: MessageTypeDefinition
    Transfer: MessageTypeDefinition
    TransferService: SubtypeConstructor<typeof grpc.Client, _transfers_TransferServiceClient> & { service: _transfers_TransferServiceDefinition }
  }
  userMapping: {
    UserMapping: MessageTypeDefinition
  }
  users: {
    FundingRoundRecord: MessageTypeDefinition
    GetListResponse: MessageTypeDefinition
    GetOneResponse: MessageTypeDefinition
    IndividualRecord: MessageTypeDefinition
    OrganizationRecord: MessageTypeDefinition
    QueryUser: MessageTypeDefinition
    Sub: MessageTypeDefinition
    User: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _users_UserServiceClient> & { service: _users_UserServiceDefinition }
  }
}

