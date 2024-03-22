// Original file: src/proto/proto/skill.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _skills_GetListResponse, GetListResponse__Output as _skills_GetListResponse__Output } from '../skills/GetListResponse';
import type { GetOneResponse as _skills_GetOneResponse, GetOneResponse__Output as _skills_GetOneResponse__Output } from '../skills/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QuerySkill as _skills_QuerySkill, QuerySkill__Output as _skills_QuerySkill__Output } from '../skills/QuerySkill';
import type { Skill as _skills_Skill, Skill__Output as _skills_Skill__Output } from '../skills/Skill';

export interface SkillServiceClient extends grpc.Client {
  create(argument: _skills_Skill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _skills_Skill, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _skills_QuerySkill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _skills_QuerySkill, callback: grpc.requestCallback<_skills_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _skills_Skill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, metadata: grpc.Metadata, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, options: grpc.CallOptions, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _skills_Skill, callback: grpc.requestCallback<_skills_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SkillServiceHandlers extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<_skills_Skill__Output, _skills_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _skills_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_skills_QuerySkill__Output, _skills_GetListResponse>;
  
  update: grpc.handleUnaryCall<_skills_Skill__Output, _skills_GetOneResponse>;
  
}

export interface SkillServiceDefinition extends grpc.ServiceDefinition {
  create: MethodDefinition<_skills_Skill, _skills_GetOneResponse, _skills_Skill__Output, _skills_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _skills_GetOneResponse, _bases_Id__Output, _skills_GetOneResponse__Output>
  getList: MethodDefinition<_skills_QuerySkill, _skills_GetListResponse, _skills_QuerySkill__Output, _skills_GetListResponse__Output>
  update: MethodDefinition<_skills_Skill, _skills_GetOneResponse, _skills_Skill__Output, _skills_GetOneResponse__Output>
}
