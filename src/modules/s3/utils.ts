import { UPLOAD_FOLDER_NAME } from '../../utils/constants';

export const getS3Key = (key: string) => `${UPLOAD_FOLDER_NAME}/${key}`;
