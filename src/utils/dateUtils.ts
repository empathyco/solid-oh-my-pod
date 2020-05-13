export class DateUtils {
  static formatHH_MM(date: Date) {
    return date.getHours() + ":" + date.getMinutes();
  }
}
