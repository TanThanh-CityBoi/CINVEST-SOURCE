import { StateEnum } from '../enums/state.enums';
export const handlePublishAt = (body) => {
  if (body.state === StateEnum.APPROVED) {
    body.publishAt = new Date();
  }
  return body;
};
