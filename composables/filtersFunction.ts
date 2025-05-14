import moment from "moment";

export function formatDate(
  date: Date | string | number,
  format: string = "YYYY-MM-DD HH:mm"
): string {
  return moment(date).format(format);
}
