import { FindOptionsRelations } from 'typeorm';

import { ProfileEntity } from './entities/profile.entity';

export const relations: FindOptionsRelations<ProfileEntity> = {
  albums: {
    images: true,
  },
  experiences: {
    documents: true,
    city: {
      country: true,
    },
    jobTitle: true,
    organization: true,
  },
  educations: {
    documents: true,
    city: {
      country: true,
    },
  },
  skills: {
    skill: true,
  },
  city: {
    country: true,
  },
  user: true,
  foundedCompanies: {
    company: true,
  },
  directorCompanies: {
    company: true,
  },
  chiefCompanies: {
    company: true,
  },
  transfers: {
    transferee: true,
  },
  exits: {
    company: true,
  },
  investedFundingRounds: {
    fundingRound: {
      investee: true,
    },
    organization: true,
    leadInvestor: true,
  },
  leadFundingRounds: {
    fundingRound: true,
    organization: true,
    individual: true,
  },
  recentNews: true,
  niches: {
    industry: true,
  },
  investLocations: {
    country: true,
  },
};

export const profileListRelations: FindOptionsRelations<ProfileEntity> = {
  experiences: {
    jobTitle: true,
    organization: true,
  },
  skills: {
    skill: true,
  },
  city: {
    country: true,
  },
  niches: {
    industry: true,
  },
  investLocations: {
    country: true,
  },
  investedFundingRounds: {
    fundingRound: {
      investee: true,
    },
    organization: true,
    leadInvestor: true,
  },
  user: true,
};

export const investmentRelations: FindOptionsRelations<ProfileEntity> = {
  transfers: {
    transferee: true,
  },
  exits: {
    company: true,
  },
};
// Mutate data profile
// export const mutateProfile = (
//   entity: ProfileEntity,
//   allows: TProfileOptionalAttribute[] = []
// ): TProfile => {
//   const item: TProfile = {
//     id: entity.id,
//     userId: entity.userId as string,
//     information: {
//       connect: entity.connect as number,
//       follow: entity.follow as number,
//       follower: entity.follower as number,
//       aboutMe: entity.aboutMe || undefined,
//       age: entity.age as number,
//       location: entity.location || undefined,
//       primaryOrganization: entity.primaryOrganization || undefined,
//       primaryJob: entity.primaryJob || undefined,
//       website: entity.website || undefined,
//       personal: entity.personal || undefined,
//       fundingRound: entity.fundingRound || undefined,
//       ipoStatus: entity.ipoStatus || undefined,
//       rankCompany: entity.rankCompany || undefined,
//     },
//     albums: entity.albums as TInterested[],
//     createdAt: (entity.createdAt && entity.createdAt.getTime()) || undefined,
//     updatedAt: (entity.updatedAt && entity.updatedAt.getTime()) || undefined,
//   };

//   if (allows.length > 0) {
//     const keys = Object.keys(item);
//     const allowKeys = allows as string[];
//     keys.forEach((key: string) => {
//       if (allowKeys.includes(key)) {
//         return;
//       }
//       delete (item as any)[key];
//     });
//   }
//   return item;
// };
