import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

export const getHtmlToSend = async (pathTemplate: string, payload: any) => {
  if (!pathTemplate) return '';
  const html = await fs.readFileSync(path.resolve(pathTemplate), {
    encoding: 'utf8',
  });
  const template = handlebars.compile(html);
  const htmlToSend = template(payload);
  return htmlToSend;
};
