import {
  grpcErrorBadRequest,
  grpcErrorNotFound,
} from '../../common/grpcError/errors';
import { connection } from '../../config/ormconfig';
import { BaseService } from '../../services/Base.service';
import { mutateQuery } from '../../utils/mutateQuery';
import { FundingRoundRecordEntity } from '../user/entities/funding-round-record.entity';
import { IndividualRecordEntity } from '../user/entities/individual-record.entity';
import { OrganizationRecordEntity } from '../user/entities/organization-record.entity';
import { ARCHIVE_RECORD_TYPE_ENUMS } from './enums/archiveRecord.enum';
import { TQueryArchiveRecord } from './types';
import { relationsFnd, relationsInd, relationsOrg } from './utils';

export class ArchiveRecordService extends BaseService {
  private readonly entityManager = connection.createEntityManager();

  async getList(query: TQueryArchiveRecord) {
    const { limit, skip, sortBy, sortOrder, conditions } = mutateQuery(query);

    const mapTypeEntity: any = {
      INDIVIDUAL: {
        entity: IndividualRecordEntity,
        relations: relationsInd,
      },
      ORGANIZATION: {
        entity: OrganizationRecordEntity,
        relations: relationsOrg,
      },
      FUNDING_ROUND: {
        entity: FundingRoundRecordEntity,
        relations: relationsFnd,
      },
    };
    const { entity, relations } =
      mapTypeEntity?.[conditions.type] ||
      mapTypeEntity[ARCHIVE_RECORD_TYPE_ENUMS.INDIVIDUAL];

    const reqUser = conditions.email;
    if (!reqUser) throw new grpcErrorBadRequest();

    delete conditions.email;
    delete conditions.type;

    try {
      const data = await this.entityManager.findAndCount(entity, {
        where: {
          ...conditions,
          user: { email: reqUser },
        },
        relations: { ...relations, user: true },
        skip,
        take: limit,
        order: {
          [sortBy]: sortOrder,
        },
      });
      return {
        data: data[0],
        totalItems: data[1],
        perPage: limit,
        page: query?.page,
        totalPages: Math.ceil(data[1] / limit),
      };
    } catch (error: any) {
      throw new grpcErrorBadRequest(JSON.stringify(error?.message ?? error));
    }
  }
}
