import _ from 'lodash';

import { S3Service } from './../modules/s3/service';

export function compareAndUpdateData(
  rootData: any,
  editedData: any,
  valIgnore?: string[],
) {
  //Remove values is undefined or null
  const validData = _.omitBy(editedData, _.isNil);

  //Get key exists in valid editedData
  const arrKeysData = Object.keys(validData);

  //Change rootData with data editedData was edited
  arrKeysData.length > 0 &&
    arrKeysData.forEach((item) => {
      if (valIgnore?.includes(item)) return;

      if (rootData[item] === validData[item]) {
        return;
      }
      rootData[item] = validData[item];
    });

  return rootData;
}

//Compare thumb at database with thumb user upload
export async function compareUpdateAttach(
  currentAttach: any,
  requestAttach: any,
) {
  let oldAttach: any = undefined;

  //Check thumb user upload
  if (requestAttach) {
    [oldAttach, currentAttach] = [currentAttach, requestAttach];
  }

  //Delete old thumb saved at aws
  if (oldAttach && oldAttach !== currentAttach) {
    const s3Service = new S3Service();
    await s3Service.deleteObjectFromUrl(oldAttach);
  }
  return currentAttach;
}
