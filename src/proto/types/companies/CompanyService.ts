// Original file: src/proto/proto/company.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Company as _companies_Company, Company__Output as _companies_Company__Output } from '../companies/Company';
import type { CountResponse as _bases_CountResponse, CountResponse__Output as _bases_CountResponse__Output } from '../bases/CountResponse';
import type { DeleteResponse as _bases_DeleteResponse, DeleteResponse__Output as _bases_DeleteResponse__Output } from '../bases/DeleteResponse';
import type { GetListResponse as _companies_GetListResponse, GetListResponse__Output as _companies_GetListResponse__Output } from '../companies/GetListResponse';
import type { GetOneResponse as _companies_GetOneResponse, GetOneResponse__Output as _companies_GetOneResponse__Output } from '../companies/GetOneResponse';
import type { Id as _bases_Id, Id__Output as _bases_Id__Output } from '../bases/Id';
import type { QueryCompany as _companies_QueryCompany, QueryCompany__Output as _companies_QueryCompany__Output } from '../companies/QueryCompany';

export interface CompanyServiceClient extends grpc.Client {
  count(argument: _companies_QueryCompany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  count(argument: _companies_QueryCompany, callback: grpc.requestCallback<_bases_CountResponse__Output>): grpc.ClientUnaryCall;
  
  create(argument: _companies_Company, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _companies_Company, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  delete(argument: _bases_Id, callback: grpc.requestCallback<_bases_DeleteResponse__Output>): grpc.ClientUnaryCall;
  
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  getById(argument: _bases_Id, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
  getList(argument: _companies_QueryCompany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  getList(argument: _companies_QueryCompany, callback: grpc.requestCallback<_companies_GetListResponse__Output>): grpc.ClientUnaryCall;
  
  update(argument: _companies_Company, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, metadata: grpc.Metadata, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, options: grpc.CallOptions, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _companies_Company, callback: grpc.requestCallback<_companies_GetOneResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface CompanyServiceHandlers extends grpc.UntypedServiceImplementation {
  count: grpc.handleUnaryCall<_companies_QueryCompany__Output, _bases_CountResponse>;
  
  create: grpc.handleUnaryCall<_companies_Company__Output, _companies_GetOneResponse>;
  
  delete: grpc.handleUnaryCall<_bases_Id__Output, _bases_DeleteResponse>;
  
  getById: grpc.handleUnaryCall<_bases_Id__Output, _companies_GetOneResponse>;
  
  getList: grpc.handleUnaryCall<_companies_QueryCompany__Output, _companies_GetListResponse>;
  
  update: grpc.handleUnaryCall<_companies_Company__Output, _companies_GetOneResponse>;
  
}

export interface CompanyServiceDefinition extends grpc.ServiceDefinition {
  count: MethodDefinition<_companies_QueryCompany, _bases_CountResponse, _companies_QueryCompany__Output, _bases_CountResponse__Output>
  create: MethodDefinition<_companies_Company, _companies_GetOneResponse, _companies_Company__Output, _companies_GetOneResponse__Output>
  delete: MethodDefinition<_bases_Id, _bases_DeleteResponse, _bases_Id__Output, _bases_DeleteResponse__Output>
  getById: MethodDefinition<_bases_Id, _companies_GetOneResponse, _bases_Id__Output, _companies_GetOneResponse__Output>
  getList: MethodDefinition<_companies_QueryCompany, _companies_GetListResponse, _companies_QueryCompany__Output, _companies_GetListResponse__Output>
  update: MethodDefinition<_companies_Company, _companies_GetOneResponse, _companies_Company__Output, _companies_GetOneResponse__Output>
}
