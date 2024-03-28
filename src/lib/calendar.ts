import { dateToGoogleCalendarFormat } from './date';

interface OptionalEventProperties {
  dateStart: Date;
  dateEnd: Date;
  title: string;
  description?: string;
  location?: string;
}

export function generateGoogleCalendarUrl({dateStart, dateEnd, title, description, location}: OptionalEventProperties
  ) {
  const encodedUrl = encodeURI([
    'https://www.google.com/calendar/render',
    '?action=TEMPLATE',
    `&text=${title}`,
    `&dates=${dateToGoogleCalendarFormat(dateStart)}/${dateToGoogleCalendarFormat(dateEnd)}`,
    `&details=${description}`,
    `&location=${location}`,
    '&sprop=&sprop=name:'].join(''));

  return encodedUrl;
}
