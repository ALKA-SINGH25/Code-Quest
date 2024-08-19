export const GA_TRACKING_ID = "G-DPNQZEQHZ6";

const isProd = process.env.NODE_ENV === "production";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (!isProd) return;
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (!isProd) return;
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
