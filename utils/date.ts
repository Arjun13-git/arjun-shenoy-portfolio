// All dates in content are plain ISO dates ("2026-03-01"), which JavaScript
// parses as UTC midnight. Formatting in UTC keeps the server and every
// visitor's browser on the same month, whatever their time zone.
const TIME_ZONE = "UTC";

/**
 * Format a date string to a readable format.
 * @param dateStr - ISO date string or "Present"
 * @param format - Output format
 */
export function formatDate(
  dateStr: string,
  format: "short" | "long" | "year" = "long"
): string {
  if (dateStr === "Present" || dateStr === "present") return "Present";

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) return dateStr;

  switch (format) {
    case "short":
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: TIME_ZONE });
    case "year":
      return date.getUTCFullYear().toString();
    case "long":
    default:
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: TIME_ZONE,
      });
  }
}

/**
 * Format a date range from start to end.
 */
export function formatDateRange(start: string, end?: string): string {
  const startFormatted = formatDate(start, "short");
  const endFormatted = end ? formatDate(end, "short") : "Present";
  return `${startFormatted} – ${endFormatted}`;
}
