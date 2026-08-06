const TR_MONTHS: Record<string, string> = {
  ocak: "01",
  şubat: "02",
  mart: "03",
  nisan: "04",
  mayıs: "05",
  haziran: "06",
  temmuz: "07",
  ağustos: "08",
  eylül: "09",
  ekim: "10",
  kasım: "11",
  aralık: "12",
};

/**
 * Best-effort parser for the Turkish date strings used in event data
 * (e.g. "22 Aralık 2025", "30-31 Ekim 2025", "Mayıs 2026") into ISO 8601
 * (YYYY-MM-DD) for structured data. Returns null when unparseable.
 */
export function parseTurkishDateToISO(input: string): string | null {
  const parts = input.trim().toLowerCase().split(/\s+/);
  if (parts.length < 2) return null;

  const year = parts[parts.length - 1];
  const monthWord = parts[parts.length - 2];
  const month = TR_MONTHS[monthWord];
  if (!month || !/^\d{4}$/.test(year)) return null;

  const dayToken = parts.length >= 3 ? parts[0] : null;
  const dayMatch = dayToken?.match(/^\d{1,2}/);
  const day = dayMatch ? dayMatch[0].padStart(2, "0") : "01";

  return `${year}-${month}-${day}`;
}
