import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEnum } from 'src/common/enums/state.enums';
import { CategoryEntity } from 'src/modules/categories/entities/category.entity';
import { SubjectEntity } from 'src/modules/subjects/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorySubjectSeedService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
    @InjectRepository(SubjectEntity)
    private readonly subjectRepo: Repository<SubjectEntity>,
  ) {}

  private readonly data = [
    {
      name: 'Startup',
      subjects: [
        {
          name: 'Projects',
        },
        {
          name: 'Tendency',
        },
        {
          name: 'Competition',
        },
        {
          name: 'Seminar',
        },
        {
          name: 'Expert Corner',
        },
        {
          name: 'Mentor',
        },
      ],
    },
    {
      name: 'Investment',
      subjects: [
        {
          name: 'Invest',
        },
        {
          name: 'Shark Tank',
        },
        {
          name: 'Venture Capital',
        },
        {
          name: 'M&A',
        },
        {
          name: 'Expert Corner',
        },
      ],
    },
    {
      name: 'Business',
      subjects: [
        {
          name: 'Information',
        },
        {
          name: 'Market',
        },
        {
          name: 'Businessman',
        },
        {
          name: 'Adinistration',
        },
        {
          name: 'Business Profile',
        },
        {
          name: 'Logistic',
        },
      ],
    },
    {
      name: 'Finace',
      subjects: [
        {
          name: 'Stock',
        },
        {
          name: 'Forex',
        },
        {
          name: 'Crypto',
        },
        {
          name: 'Fund Certificates',
        },
        {
          name: 'Commodity Derivative',
        },
        {
          name: 'Bank',
        },
        {
          name: 'Insurance',
        },
        {
          name: 'Expert Corner',
        },
      ],
    },
    {
      name: 'Law',
      subjects: [
        {
          name: 'Politics & Policy',
        },
        {
          name: 'Advisory',
        },
      ],
    },
  ];

  async seed() {
    Logger.debug('CategorySubjectSeedService');
    return Promise.all(
      this.data.map(async (category) => {
        // subjects
        const subjects = await Promise.all(
          category.subjects.map(async (subject) => {
            const detailSuject = await this.subjectRepo.findOne({
              where: {
                name: subject.name,
              },
            });
            if (detailSuject) return;
            return this.subjectRepo.save({
              name: subject.name,
              state: StateEnum.APPROVED,
            });
          }),
        );
        // category
        const detailCategory = await this.categoryRepo.findOne({
          where: {
            name: category.name,
          },
        });
        if (detailCategory) return;
        return this.categoryRepo.save({
          name: category.name,
          state: StateEnum.APPROVED,
          subjects: subjects,
        });
      }),
    );
  }
}
