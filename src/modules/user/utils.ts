export const mutateAttachFile = (entity: {
  attachFile: string;
  typeAttach: string;
}) => {
  const data: { attachFile: string; typeAttach: string } = {
    attachFile: entity.attachFile,
    typeAttach: entity.typeAttach,
  };
  return data;
};
