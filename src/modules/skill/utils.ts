// export const mutateSkill = (
//   entity: SkillEntity,
//   allows: TSkillOptionalAttribute[] = []
// ): TSkill => {
//   const item: TSkill = {
//     id: entity.id,
//     name: entity.name,
//     position: entity.position || undefined,
//     endorsement: entity.endorsement as number,
//     thumb: entity.thumb || undefined,
//     profileId: entity.profileId,
//     createdAt: entity.createdAt?.getTime(),
//     updatedAt: entity.updatedAt?.getTime(),
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
