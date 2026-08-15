'use strict';

/** Production SEO constants – canonical domain and shared English OG copy. */

const SITE_ORIGIN = 'https://www.promptanatomy.info';
/** Main interactive course (not the prompt library on .info). */
const COURSE_URL_EN = 'https://www.promptanatomy.app/en';
/** Hub home (entity + training/checkout). Not the course entry. */
const HUB_URL = 'https://www.promptanatomy.app/';
const HUB_ENTITY_URL =
  'https://www.promptanatomy.app/?utm_source=info&utm_medium=entity_footer&utm_campaign=ecosystem';
/** Earned handoff after the 8-step ritual. Not the entity footer. */
const COURSE_RITUAL_URL =
  'https://www.promptanatomy.app/en?utm_source=info&utm_medium=ritual_complete&utm_campaign=ecosystem';
const OG_IMAGE_URL = `${SITE_ORIGIN}/assets/img/og/og-image.png`;
const OG_IMAGE_ALT = 'Prompt Anatomy – AI Automation Library';

const HREFLANG_LIBRARY = `    <link rel="alternate" hreflang="lt" href="${SITE_ORIGIN}/lt/" id="hreflang-lt">
    <link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/en/" id="hreflang-en">
    <link rel="alternate" hreflang="et" href="${SITE_ORIGIN}/et/" id="hreflang-et">
    <link rel="alternate" hreflang="lv" href="${SITE_ORIGIN}/lv/" id="hreflang-lv">
    <link rel="alternate" hreflang="ja" href="${SITE_ORIGIN}/ja/" id="hreflang-ja">
    <link rel="alternate" hreflang="zh-Hans" href="${SITE_ORIGIN}/zh/" id="hreflang-zh">
    <link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/en/" id="hreflang-default">`;

const HREFLANG_PRIVACY = `    <link rel="alternate" hreflang="lt" href="${SITE_ORIGIN}/lt/privatumas.html" id="hreflang-lt">
    <link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/en/privacy.html" id="hreflang-en">
    <link rel="alternate" hreflang="et" href="${SITE_ORIGIN}/et/privacy.html" id="hreflang-et">
    <link rel="alternate" hreflang="lv" href="${SITE_ORIGIN}/lv/privacy.html" id="hreflang-lv">
    <link rel="alternate" hreflang="ja" href="${SITE_ORIGIN}/ja/privacy.html" id="hreflang-ja">
    <link rel="alternate" hreflang="zh-Hans" href="${SITE_ORIGIN}/zh/privacy.html" id="hreflang-zh">
    <link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/en/privacy.html" id="hreflang-default">`;

const OG_LIBRARY_TITLE =
  'Let AI do 30–50% of your daily tasks – Prompt Anatomy';
const OG_LIBRARY_DESCRIPTION =
  '8 exercises with ready-made templates – results in minutes.';

const OG_PRIVACY_TITLE = 'Privacy policy – Prompt Anatomy';
const OG_PRIVACY_DESCRIPTION =
  'Prompt Anatomy prompt library. We do not collect personal data; localStorage only for prompt progress on your device.';

const OG_LOCALE = {
  en: 'en_US',
  lt: 'lt_LT',
  et: 'et_EE',
  lv: 'lv_LV',
  ja: 'ja_JP',
  zh: 'zh_CN',
};

const OG_LOCALE_ALTERNATES = {
  en: ['lt_LT', 'et_EE', 'lv_LV', 'ja_JP', 'zh_CN'],
  lt: ['en_US', 'et_EE', 'lv_LV', 'ja_JP', 'zh_CN'],
  et: ['lt_LT', 'en_US', 'lv_LV', 'ja_JP', 'zh_CN'],
  lv: ['lt_LT', 'en_US', 'et_EE', 'ja_JP', 'zh_CN'],
  ja: ['lt_LT', 'en_US', 'et_EE', 'lv_LV', 'zh_CN'],
  zh: ['lt_LT', 'en_US', 'et_EE', 'lv_LV', 'ja_JP'],
};

function ogLocaleAlternates(langCode) {
  const codes = OG_LOCALE_ALTERNATES[langCode] || OG_LOCALE_ALTERNATES.en;
  return codes
    .map((code) => `    <meta property="og:locale:alternate" content="${code}">`)
    .join('\n');
}

function ogLibraryBlock(pageUrl, langCode, title, description) {
  const locale = OG_LOCALE[langCode] || OG_LOCALE.en;
  const ogTitle = title || OG_LIBRARY_TITLE;
  const ogDesc = description || OG_LIBRARY_DESCRIPTION;
  return `    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Prompt Anatomy">
    <meta property="og:locale" content="${locale}">
${ogLocaleAlternates(langCode)}
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${OG_IMAGE_URL}">
    <meta property="og:image:secure_url" content="${OG_IMAGE_URL}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${OG_IMAGE_ALT}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDesc}">
    <meta name="twitter:image" content="${OG_IMAGE_URL}">
    <meta name="twitter:image:alt" content="${OG_IMAGE_ALT}">`;
}

function ogPrivacyBlock(pageUrl, langCode, title, description) {
  const locale = OG_LOCALE[langCode] || OG_LOCALE.en;
  const ogTitle = title || OG_PRIVACY_TITLE;
  const ogDesc = description || OG_PRIVACY_DESCRIPTION;
  return `    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Prompt Anatomy">
    <meta property="og:locale" content="${locale}">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${OG_IMAGE_URL}">
    <meta property="og:image:secure_url" content="${OG_IMAGE_URL}">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${OG_IMAGE_ALT}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${ogTitle}">
    <meta name="twitter:description" content="${ogDesc}">
    <meta name="twitter:image" content="${OG_IMAGE_URL}">
    <meta name="twitter:image:alt" content="${OG_IMAGE_ALT}">`;
}

function jsonLdLibrary(localePath, langCode, pageTitle, pageDescription) {
  const pageUrl = `${SITE_ORIGIN}${localePath}`;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'Prompt Anatomy',
        url: `${SITE_ORIGIN}/`,
        email: 'info@promptanatomy.app',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1311 Park St, Unit #654',
          addressLocality: 'Alameda',
          addressRegion: 'CA',
          postalCode: '94501',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        name: 'Prompt Anatomy – Prompt Library',
        url: pageUrl,
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
        inLanguage: langCode,
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        inLanguage: langCode,
      },
    ],
  };
  return `    <script type="application/ld+json">${JSON.stringify(graph)}</script>`;
}

module.exports = {
  SITE_ORIGIN,
  COURSE_URL_EN,
  COURSE_RITUAL_URL,
  HUB_URL,
  HUB_ENTITY_URL,
  OG_IMAGE_URL,
  OG_IMAGE_ALT,
  HREFLANG_LIBRARY,
  HREFLANG_PRIVACY,
  OG_LIBRARY_TITLE,
  OG_LIBRARY_DESCRIPTION,
  OG_PRIVACY_TITLE,
  OG_PRIVACY_DESCRIPTION,
  OG_LOCALE,
  OG_LOCALE_ALTERNATES,
  ogLocaleAlternates,
  ogLibraryBlock,
  ogPrivacyBlock,
  jsonLdLibrary,
};
