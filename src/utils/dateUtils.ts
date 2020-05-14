export class DateUtils {
  static formatHH_MM(date: Date) {
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return hours + ":" + minutes;
  }
}
