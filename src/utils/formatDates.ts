/**
 * Formats a duration in milliseconds to a string in the format "HH:MM".
 */
export const formatTime = (duration: number) => {
  const hours = Math.floor(duration / 3600000);
  const minutes = Math.floor((duration % 3600000) / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);
  return `${hours.toString()}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

/**
 * Transforms a date into the standardized "YYYY-MM-DD" format.
 */
const dateFormatter = new Intl.DateTimeFormat("es-us", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});
export const formatDate = (date: string) => {
  return dateFormatter.format(new Date(date));
};
