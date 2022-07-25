/**
 * Use this to deal/manipulate dates
 */
import { addDays, subDays } from 'date-fns';

type TDateFormat = 'MM/dd/yyyy' | 'yyyy/MM/dd';

export const formatDate = (date: Date, dateFormat?: TDateFormat) => {
  const day = date.getUTCDate().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = date.getUTCFullYear().toString();
  const formatString = dateFormat || 'yyyy/MM/dd';

  const formatedDate = formatString.replace(/dd/, day).replace(/MM/, month).replace(/yyyy/, year);
  return formatedDate;
};

export const parseDate = (date: Date) => {
  const monthName = date.toLocaleString('default', { month: 'short' });
  const day = date.getUTCDate().toString();
  const year = date.getUTCFullYear().toString();

  const formatedDate = `${monthName[0].toUpperCase() + monthName.substring(1)}. ${day}, ${year}`;
  return formatedDate;
};

export const addDaysToDate = (date: Date, days: number) => {
  return addDays(date, days);
};

export const subDaysToDate = (date: Date, days: number) => {
  return subDays(date, days);
};
