import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { ProtoFilePath } from '../common/enums/enums';
import { rpcAcquisitionController } from '../modules/acquisitions/rpc.controller';
import { rpcAlbumController } from '../modules/album/rpc.controller';
import { rpcArchiveRecordController } from '../modules/archiveRecords/rpc.controller';
import { rpcAreaController } from '../modules/area/rpc.controller';
import { rpcCampaignController } from '../modules/campaign/rpc.controller';
import { rpcCityController } from '../modules/city/rpc.controller';
import { rpcCompanyController } from '../modules/company/rpc.controller';
import { rpcConnectionController } from '../modules/connection/rpc.controller';
import { rpcCooperationController } from '../modules/cooperation/rpc.controller';
import { rpcCountryController } from '../modules/country/rpc.controller';
import { rpcEducationController } from '../modules/education/rpc.controller';
import { rpcExitController } from '../modules/exit/rpc.controller';
import { rpcExperienceController } from '../modules/experience/rpc.controller';
import { rpcFAQController } from '../modules/faq/rpc.controller';
import { rpcFundingRoundController } from '../modules/fundingRound/rpc.controller';
import { rpcIndustryController } from '../modules/industry/rpc.controller';
import { rpcIpoStockController } from '../modules/ipoStock/rpc.controller';
import { rpcJobTitleController } from '../modules/jobTitle/rpc.controller';
import { rpcMergeController } from '../modules/merge/rpc.controller';
import { rpcProductController } from '../modules/products/rpc.controller';
import { rpcProductTypeController } from '../modules/productType/rpc.controller';
import { rpcProfileController } from '../modules/profile/rpc.controller';
import { rpcRecentNewController } from '../modules/recentNews/rpc.controller';
import { rpcSchoolController } from '../modules/school/rpc.controller';
import { rpcServiceController } from '../modules/services/rpc.controller';
import { rpcSkillController } from '../modules/skill/rpc.controller';
import { rpcSocialController } from '../modules/socials/rpc.controller';
import { rpcStatisticController } from '../modules/statistics/rpc.controller';
import { rpcTransferController } from '../modules/transfer/gpc.controller';
import { rpcUserController } from '../modules/user/rpc.controller';
import { AcquisitionServiceHandlers } from '../proto/types/acquisitions/AcquisitionService';
import { AlbumServiceHandlers } from '../proto/types/albums/AlbumService';
import { GetOneResponse } from '../proto/types/albums/GetOneResponse';
import { ArchiveRecordServiceHandlers } from '../proto/types/archiveRecords/ArchiveRecordService';
import { AreaServiceHandlers } from '../proto/types/areas/AreaService';
import { Id__Output } from '../proto/types/bases/Id';
import { CampaignServiceHandlers } from '../proto/types/campaigns/CampaignService';
import { CityServiceHandlers } from '../proto/types/cities/CityService';
import { CompanyServiceHandlers } from '../proto/types/companies/CompanyService';
import { ConnectionServiceHandlers } from '../proto/types/connections/ConnectionService';
import { CooperationServiceHandlers } from '../proto/types/cooperations/CooperationService';
import { CountryServiceHandlers } from '../proto/types/countries/CountryService';
import { EducationServiceHandlers } from '../proto/types/educations/EducationService';
import { ExitServiceHandlers } from '../proto/types/exits/ExitService';
import { ExperienceServiceHandlers } from '../proto/types/experiences/ExperienceService';
import { FAQsServiceHandlers } from '../proto/types/faq/FAQsService';
import { FundingRoundServiceHandlers } from '../proto/types/fundingRounds/FundingRoundService';
import { IndustryServiceHandlers } from '../proto/types/industries/IndustryService';
import { IpoStockServiceHandlers } from '../proto/types/ipoStocks/IpoStockService';
import { JobTitleServiceHandlers } from '../proto/types/jobTitles/JobTitleService';
import { MergeServiceHandlers } from '../proto/types/merges/MergeService';
import { ProductServiceHandlers } from '../proto/types/products/ProductService';
import { ProductTypeServiceHandlers } from '../proto/types/productTypes/ProductTypeService';
import { ProfileServiceHandlers } from '../proto/types/profiles/ProfileService';
import { RecentNewServiceHandlers } from '../proto/types/recentNews/RecentNewService';
import { SchoolServiceHandlers } from '../proto/types/schools/SchoolService';
import { ServiceServiceHandlers } from '../proto/types/services/ServiceService';
import { SkillServiceHandlers } from '../proto/types/skills/SkillService';
import { SocialServiceHandlers } from '../proto/types/socials/SocialService';
import { StatisticServiceHandlers } from '../proto/types/statistic/StatisticService';
import { TransferServiceHandlers } from '../proto/types/transfers/TransferService';
import { UserServiceHandlers } from '../proto/types/users/UserService';
import { GRPC_NEWS_HOST } from '../utils/constants';

const rpcControllers = {
  skill: new rpcSkillController(),
  country: new rpcCountryController(),
  city: new rpcCityController(),
  user: new rpcUserController(),
  acquisition: new rpcAcquisitionController(),
  transfer: new rpcTransferController(),
  exit: new rpcExitController(),
  profile: new rpcProfileController(),
  education: new rpcEducationController(),
  experience: new rpcExperienceController(),
  company: new rpcCompanyController(),
  cooperation: new rpcCooperationController(),
  jobTitle: new rpcJobTitleController(),
  industry: new rpcIndustryController(),
  funding: new rpcFundingRoundController(),
  service: new rpcServiceController(),
  product: new rpcProductController(),
  merge: new rpcMergeController(),
  ipoStock: new rpcIpoStockController(),
  album: new rpcAlbumController(),
  socials: new rpcSocialController(),
  connection: new rpcConnectionController(),
  campaign: new rpcCampaignController(),
  area: new rpcAreaController(),
  recentNew: new rpcRecentNewController(),
  school: new rpcSchoolController(),
  statistic: new rpcStatisticController(),
  faq: new rpcFAQController(),
  productType: new rpcProductTypeController(),
  archiveRecord: new rpcArchiveRecordController(),
};

export const protoOptions: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

export const protoLoaderPath = [
  path.resolve(ProtoFilePath.SKILL),
  path.resolve(ProtoFilePath.CITY),
  path.resolve(ProtoFilePath.COUNTRY),
  path.resolve(ProtoFilePath.USERS),
  path.resolve(ProtoFilePath.ACQUISITION),
  path.resolve(ProtoFilePath.TRANSFER),
  path.resolve(ProtoFilePath.EXIT),
  path.resolve(ProtoFilePath.PROFILE),
  path.resolve(ProtoFilePath.EDUCATION),
  path.resolve(ProtoFilePath.EXPERIENCE),
  path.resolve(ProtoFilePath.COMPANY),
  path.resolve(ProtoFilePath.JOBTITLE),
  path.resolve(ProtoFilePath.INDUSTRY),
  path.resolve(ProtoFilePath.FUNDING),
  path.resolve(ProtoFilePath.SERVICES),
  path.resolve(ProtoFilePath.PRODUCTS),
  path.resolve(ProtoFilePath.MERGES),
  path.resolve(ProtoFilePath.IPOSTOCK),
  path.resolve(ProtoFilePath.ALBUM),
  path.resolve(ProtoFilePath.SOCIAL),
  path.resolve(ProtoFilePath.CONNECTION),
  path.resolve(ProtoFilePath.CAMPAIGN),
  path.resolve(ProtoFilePath.AREA),
  path.resolve(ProtoFilePath.RECENTNEW),
  path.resolve(ProtoFilePath.SCHOOL),
  path.resolve(ProtoFilePath.DOCUMENT),
  path.resolve(ProtoFilePath.HASHTAG),
  path.resolve(ProtoFilePath.STATISTIC),
  path.resolve(ProtoFilePath.FAQ),
  path.resolve(ProtoFilePath.PRODUCT_TYPE),
  path.resolve(ProtoFilePath.COOPERATION),
  path.resolve(ProtoFilePath.ARCHIVE_RECORD),
];

export const packageDef = protoLoader.loadSync(protoLoaderPath, protoOptions);

const proto = grpc.loadPackageDefinition(packageDef) as any;
const server = new grpc.Server();

export const clientHashTagGRPC = new proto.news.HashTagServiceGrpc(
  GRPC_NEWS_HOST,
  grpc.credentials.createInsecure(),
);

server.addService(proto.skills.SkillService.service, {
  getList: (req, res) => rpcControllers.skill.getList(req, res),
  getById: (req, res) => rpcControllers.skill.getById(req, res),
  create: (req, res) => rpcControllers.skill.create(req, res),
  update: (req, res) => rpcControllers.skill.update(req, res),
  delete: (req, res) => rpcControllers.skill.delete(req, res),
} as SkillServiceHandlers);

server.addService(proto.cities.CityService.service, {
  getList: (req, res) => rpcControllers.city.getList(req, res),
  getById: (req, res) => rpcControllers.city.getById(req, res),
  create: (req, res) => rpcControllers.city.create(req, res),
  update: (req, res) => rpcControllers.city.update(req, res),
  delete: (req, res) => rpcControllers.city.delete(req, res),
} as CityServiceHandlers);

server.addService(proto.countries.CountryService.service, {
  getList: (req, res) => rpcControllers.country.getList(req, res),
  getById: (req, res) => rpcControllers.country.getById(req, res),
  create: (req, res) => rpcControllers.country.create(req, res),
  update: (req, res) => rpcControllers.country.update(req, res),
  delete: (req, res) => rpcControllers.country.delete(req, res),
} as CountryServiceHandlers);

server.addService(proto.users.UserService.service, {
  getList: (req, res) => rpcControllers.user.getList(req, res),
  create: (req, res) => rpcControllers.user.create(req, res),
  update: (req, res) => rpcControllers.user.update(req, res),
  delete: (req, res) => rpcControllers.user.delete(req, res),
  deleteBySub: (req, res) => rpcControllers.user.deleteBySub(req, res),
  getBySub: (req, res) => rpcControllers.user.getBySub(req, res),
  getById: (req, res) => rpcControllers.user.getById(req, res),
} as UserServiceHandlers);

server.addService(proto.acquisitions.AcquisitionService.service, {
  getList: (req, res) => rpcControllers.acquisition.getList(req, res),
  getById: (req, res) => rpcControllers.acquisition.getById(req, res),
  create: (req, res) => rpcControllers.acquisition.create(req, res),
  update: (req, res) => rpcControllers.acquisition.update(req, res),
  delete: (req, res) => rpcControllers.acquisition.delete(req, res),
} as AcquisitionServiceHandlers);

server.addService(proto.transfers.TransferService.service, {
  getList: (req, res) => rpcControllers.transfer.getList(req, res),
  getById: (req, res) => rpcControllers.transfer.getById(req, res),
  create: (req, res) => rpcControllers.transfer.create(req, res),
  update: (req, res) => rpcControllers.transfer.update(req, res),
  delete: (req, res) => rpcControllers.transfer.delete(req, res),
} as TransferServiceHandlers);

server.addService(proto.exits.ExitService.service, {
  getList: (req, res) => rpcControllers.exit.getList(req, res),
  getById: (req, res) => rpcControllers.exit.getById(req, res),
  create: (req, res) => rpcControllers.exit.create(req, res),
  update: (req, res) => rpcControllers.exit.update(req, res),
  delete: (req, res) => rpcControllers.exit.delete(req, res),
} as ExitServiceHandlers);

server.addService(proto.profiles.ProfileService.service, {
  getList: (req, res) => rpcControllers.profile.getList(req, res),
  getById: (req, res) => rpcControllers.profile.getById(req, res),
  create: (req, res) => rpcControllers.profile.create(req, res),
  update: (req, res) => rpcControllers.profile.update(req, res),
  delete: (req, res) => rpcControllers.profile.delete(req, res),
  count: (req, res) => rpcControllers.profile.count(req, res),
} as ProfileServiceHandlers);

server.addService(proto.educations.EducationService.service, {
  getList: (req, res) => rpcControllers.education.getList(req, res),
  getById: (req, res) => rpcControllers.education.getById(req, res),
  create: (req, res) => rpcControllers.education.create(req, res),
  update: (req, res) => rpcControllers.education.update(req, res),
  delete: (req, res) => rpcControllers.education.delete(req, res),
} as EducationServiceHandlers);

server.addService(proto.albums.AlbumService.service, {
  getList: (req, res) => rpcControllers.album.getList(req, res),
  getById: (req, res) => rpcControllers.album.getById(req, res),
  create: (req, res) => rpcControllers.album.create(req, res),
  update: (req, res) => rpcControllers.album.update(req, res),
  delete: (req, res) => rpcControllers.album.delete(req, res),
} as AlbumServiceHandlers);

server.addService(proto.experiences.ExperienceService.service, {
  getList: (req, res) => rpcControllers.experience.getList(req, res),
  getById: (req, res) => rpcControllers.experience.getById(req, res),
  create: (req, res) => rpcControllers.experience.create(req, res),
  update: (req, res) => rpcControllers.experience.update(req, res),
  delete: (req, res) => rpcControllers.experience.delete(req, res),
} as ExperienceServiceHandlers);

server.addService(proto.companies.CompanyService.service, {
  getList: (req, res) => rpcControllers.company.getList(req, res),
  getById: (req, res) => rpcControllers.company.getById(req, res),
  create: (req, res) => rpcControllers.company.create(req, res),
  update: (req, res) => rpcControllers.company.update(req, res),
  delete: (req, res) => rpcControllers.company.delete(req, res),
  count: (req, res) => rpcControllers.company.count(req, res),
} as CompanyServiceHandlers);

server.addService(proto.jobTitles.JobTitleService.service, {
  getList: (req, res) => rpcControllers.jobTitle.getList(req, res),
  getById: (req, res) => rpcControllers.jobTitle.getById(req, res),
  create: (req, res) => rpcControllers.jobTitle.create(req, res),
  update: (req, res) => rpcControllers.jobTitle.update(req, res),
  delete: (req, res) => rpcControllers.jobTitle.delete(req, res),
} as JobTitleServiceHandlers);

server.addService(proto.industries.IndustryService.service, {
  getList: (req, res) => rpcControllers.industry.getList(req, res),
  getById: (req, res) => rpcControllers.industry.getById(req, res),
  create: (req, res) => rpcControllers.industry.create(req, res),
  update: (req, res) => rpcControllers.industry.update(req, res),
  delete: (req, res) => rpcControllers.industry.delete(req, res),
} as IndustryServiceHandlers);

server.addService(proto.fundingRounds.FundingRoundService.service, {
  getList: (req, res) => rpcControllers.funding.getList(req, res),
  getById: (req, res) => rpcControllers.funding.getById(req, res),
  create: (req, res) => rpcControllers.funding.create(req, res),
  update: (req, res) => rpcControllers.funding.update(req, res),
  delete: (req, res) => rpcControllers.funding.delete(req, res),
  deleteInvestor: (req, res) => rpcControllers.funding.deleteInvestor(req, res),
} as FundingRoundServiceHandlers);

server.addService(proto.services.ServiceService.service, {
  getList: (req, res) => rpcControllers.service.getList(req, res),
  getById: (req, res) => rpcControllers.service.getById(req, res),
  create: (req, res) => rpcControllers.service.create(req, res),
  update: (req, res) => rpcControllers.service.update(req, res),
  delete: (req, res) => rpcControllers.service.delete(req, res),
} as ServiceServiceHandlers);

server.addService(proto.products.ProductService.service, {
  getList: (req, res) => rpcControllers.product.getList(req, res),
  getById: (req, res) => rpcControllers.product.getById(req, res),
  create: (req, res) => rpcControllers.product.create(req, res),
  update: (req, res) => rpcControllers.product.update(req, res),
  delete: (req, res) => rpcControllers.product.delete(req, res),
} as ProductServiceHandlers);

server.addService(proto.merges.MergeService.service, {
  getList: (req, res) => rpcControllers.merge.getList(req, res),
  getById: (req, res) => rpcControllers.merge.getById(req, res),
  create: (req, res) => rpcControllers.merge.create(req, res),
  update: (req, res) => rpcControllers.merge.update(req, res),
  delete: (req, res) => rpcControllers.merge.delete(req, res),
} as MergeServiceHandlers);

server.addService(proto.ipoStocks.IpoStockService.service, {
  getList: (req, res) => rpcControllers.ipoStock.getList(req, res),
  getById: (req, res) => rpcControllers.ipoStock.getById(req, res),
  create: (req, res) => rpcControllers.ipoStock.create(req, res),
  update: (req, res) => rpcControllers.ipoStock.update(req, res),
  delete: (req, res) => rpcControllers.ipoStock.delete(req, res),
} as IpoStockServiceHandlers);

server.addService(proto.socials.SocialService.service, {
  getList: (req, res) => rpcControllers.socials.getList(req, res),
  getById: (req, res) => rpcControllers.socials.getById(req, res),
  create: (req, res) => rpcControllers.socials.create(req, res),
  update: (req, res) => rpcControllers.socials.update(req, res),
  delete: (req, res) => rpcControllers.socials.delete(req, res),
} as SocialServiceHandlers);

server.addService(proto.connections.ConnectionService.service, {
  getList: (req, res) => rpcControllers.connection.getList(req, res),
  getById: (req, res) => rpcControllers.connection.getById(req, res),
  acceptConnection: (
    req: grpc.ServerUnaryCall<Id__Output, GetOneResponse>,
    res: grpc.sendUnaryData<GetOneResponse>,
  ) => rpcControllers.connection.acceptConnection(req, res),
  create: (req, res) => rpcControllers.connection.create(req, res),
  update: (req, res) => rpcControllers.connection.update(req, res),
  delete: (req, res) => rpcControllers.connection.delete(req, res),
} as ConnectionServiceHandlers);

server.addService(proto.campaigns.CampaignService.service, {
  getList: (req, res) => rpcControllers.campaign.getList(req, res),
  getById: (req, res) => rpcControllers.campaign.getById(req, res),
  create: (req, res) => rpcControllers.campaign.create(req, res),
  update: (req, res) => rpcControllers.campaign.update(req, res),
  delete: (req, res) => rpcControllers.campaign.delete(req, res),
  count: (req, res) => rpcControllers.campaign.count(req, res),
} as CampaignServiceHandlers);

server.addService(proto.areas.AreaService.service, {
  getList: (req, res) => rpcControllers.area.getList(req, res),
  getById: (req, res) => rpcControllers.area.getById(req, res),
  create: (req, res) => rpcControllers.area.create(req, res),
  update: (req, res) => rpcControllers.area.update(req, res),
  delete: (req, res) => rpcControllers.area.delete(req, res),
} as AreaServiceHandlers);

server.addService(proto.recentNews.RecentNewService.service, {
  getList: (req, res) => rpcControllers.recentNew.getList(req, res),
  getById: (req, res) => rpcControllers.recentNew.getById(req, res),
  create: (req, res) => rpcControllers.recentNew.create(req, res),
  update: (req, res) => rpcControllers.recentNew.update(req, res),
  delete: (req, res) => rpcControllers.recentNew.delete(req, res),
} as RecentNewServiceHandlers);

server.addService(proto.schools.SchoolService.service, {
  getList: (req, res) => rpcControllers.school.getList(req, res),
  getById: (req, res) => rpcControllers.school.getById(req, res),
  create: (req, res) => rpcControllers.school.create(req, res),
  update: (req, res) => rpcControllers.school.update(req, res),
  delete: (req, res) => rpcControllers.school.delete(req, res),
} as SchoolServiceHandlers);

server.addService(proto.statistic.StatisticService.service, {
  getList: (req, res) => rpcControllers.statistic.getList(req, res),
} as StatisticServiceHandlers);

server.addService(proto.faq.FAQsService.service, {
  getList: (req, res) => rpcControllers.faq.getList(req, res),
  getById: (req, res) => rpcControllers.faq.getById(req, res),
  create: (req, res) => rpcControllers.faq.create(req, res),
  update: (req, res) => rpcControllers.faq.update(req, res),
  delete: (req, res) => rpcControllers.faq.delete(req, res),
} as FAQsServiceHandlers);

server.addService(proto.productTypes.ProductTypeService.service, {
  getList: (req, res) => rpcControllers.productType.getList(req, res),
  getById: (req, res) => rpcControllers.productType.getById(req, res),
  create: (req, res) => rpcControllers.productType.create(req, res),
  update: (req, res) => rpcControllers.productType.update(req, res),
  delete: (req, res) => rpcControllers.productType.delete(req, res),
} as ProductTypeServiceHandlers);

server.addService(proto.cooperations.CooperationService.service, {
  getList: (req, res) => rpcControllers.cooperation.getList(req, res),
  getById: (req, res) => rpcControllers.cooperation.getById(req, res),
  create: (req, res) => rpcControllers.cooperation.create(req, res),
  update: (req, res) => rpcControllers.cooperation.update(req, res),
  delete: (req, res) => rpcControllers.cooperation.delete(req, res),
} as CooperationServiceHandlers);

server.addService(proto.archiveRecords.ArchiveRecordService.service, {
  getList: (req, res) => rpcControllers.archiveRecord.getList(req, res),
} as ArchiveRecordServiceHandlers);

export { server };
