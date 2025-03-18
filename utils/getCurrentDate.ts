export function getCurrentDate(): string {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
