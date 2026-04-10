export function openWhatsAppUrl(url: string) {
  if (typeof window === "undefined") return;

  const isEmbedded = window.top !== window.self;

  if (isEmbedded) {
    window.open(url, "_top");
    return;
  }

  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.assign(url);
  }
}
