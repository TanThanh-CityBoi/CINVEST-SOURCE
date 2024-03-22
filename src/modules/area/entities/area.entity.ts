import { Column, Entity, OneToMany } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { MainAreEnum } from '../../../common/enums/enums';
import { CountryEntity } from '../../country/entities/country.entity';

@Entity('areas')
export class AreaEntity extends BaseAbstractEntity {
  @Column({ name: 'name', unique: true, type: 'varchar', nullable: true })
  name: string;

  @Column({
    name: 'main_area',
    type: 'enum',
    enum: [
      MainAreEnum.AMERICA,
      MainAreEnum.ASIA_PACIFIC,
      MainAreEnum.EUROPE,
      MainAreEnum.MIDDLE_EAST_AFRICA,
    ],
    nullable: true,
  })
  mainArea: string;

  @OneToMany(() => CountryEntity, (countries) => countries.area, {
    cascade: true,
  })
  countries: CountryEntity[];
}
