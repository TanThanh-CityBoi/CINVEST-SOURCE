import { EntityManager } from 'typeorm';
import { TPaginationResult } from '../types';

export abstract class BaseAbstractService<T> {
  abstract getList(query: any): Promise<TPaginationResult<T> | T[]>;
  abstract getById(id: number): Promise<T>;
  abstract create(dto: any, em?: EntityManager): Promise<T>;
  abstract update(id: number, dto: any, em?: EntityManager): Promise<T>;
  abstract delete(id: number): Promise<any>;
}
