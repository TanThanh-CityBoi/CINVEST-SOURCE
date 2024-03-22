// Original file: src/proto/proto/profileSkillMapping.proto

import type { Profile as _profiles_Profile, Profile__Output as _profiles_Profile__Output } from '../profiles/Profile';
import type { Skill as _skills_Skill, Skill__Output as _skills_Skill__Output } from '../skills/Skill';

export interface ProfileSkillMapping {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'skillId'?: (number);
  'profile'?: (_profiles_Profile | null);
  'skill'?: (_skills_Skill | null);
  '_id'?: "id";
  '_createdAt'?: "createdAt";
  '_updatedAt'?: "updatedAt";
  '_createdBy'?: "createdBy";
  '_updatedBy'?: "updatedBy";
  '_state'?: "state";
  '_profileId'?: "profileId";
  '_skillId'?: "skillId";
  '_profile'?: "profile";
  '_skill'?: "skill";
}

export interface ProfileSkillMapping__Output {
  'id'?: (number);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'createdBy'?: (string);
  'updatedBy'?: (string);
  'state'?: (string);
  'profileId'?: (number);
  'skillId'?: (number);
  'profile'?: (_profiles_Profile__Output | null);
  'skill'?: (_skills_Skill__Output | null);
  '_id': "id";
  '_createdAt': "createdAt";
  '_updatedAt': "updatedAt";
  '_createdBy': "createdBy";
  '_updatedBy': "updatedBy";
  '_state': "state";
  '_profileId': "profileId";
  '_skillId': "skillId";
  '_profile': "profile";
  '_skill': "skill";
}
