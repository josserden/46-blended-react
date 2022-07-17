import { formatDistanceToNow } from 'date-fns';
export function formatDateToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
