import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseAbstractEntity } from '../../../common/base/base.entity';
import { FAQEntity } from './faq.entity';

@Entity('question_awsers')
export class QAndAEntity extends BaseAbstractEntity {
  @Column({
    name: 'question',
    nullable: true,
  })
  question: string;

  @Column({
    name: 'answer',
    nullable: true,
  })
  answer: string;

  @Column({ name: 'faq_id', nullable: true })
  faqId: number;

  @ManyToOne(() => FAQEntity, (faq) => faq.qAndA, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'faq_id' })
  faq: FAQEntity;
}
