'use strict';

/** Production SEO constants – canonical domain and shared English OG copy. */

const SITE_ORIGIN = 'https://www.promptanatomy.info';
const OG_IMAGE_URL = `${SITE_ORIGIN}/og-image.png`;
const OG_IMAGE_ALT = 'Prompt Anatomy – AI Automation Library';

const HREFLANG_LIBRARY = `    <link rel="alternate" hreflang="lt" href="${SITE_ORIGIN}/lt/" id="hreflang-lt">
    <link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/en/" id="hreflang-en">
    <link rel="alternate" hreflang="et" href="${SITE_ORIGIN}/et/" id="hreflang-et">
    <link rel="alternate" hreflang="lv" href="${SITE_ORIGIN}/lv/" id="hreflang-lv">
    <link rel="alternate" hreflang="ja" href="${SITE_ORIGIN}/ja/" id="hreflang-ja">
    <link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/en/" id="hreflang-default">`;

const HREFLANG_PRIVACY = `    <link rel="alternate" hreflang="lt" href="${SITE_ORIGIN}/lt/privatumas.html" id="hreflang-lt">
    <link rel="alternate" hreflang="en" href="${SITE_ORIGIN}/en/privacy.html" id="hreflang-en">
    <link rel="alternate" hreflang="et" href="${SITE_ORIGIN}/et/privacy.html" id="hreflang-et">
    <link rel="alternate" hreflang="lv" href="${SITE_ORIGIN}/lv/privacy.html" id="hreflang-lv">
    <link rel="alternate" hreflang="ja" href="${SITE_ORIGIN}/ja/privacy.html" id="hreflang-ja">
    <link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/en/privacy.html" id="hreflang-default">`;

const OG_LIBRARY_TITLE =
  'Let AI do 30–50% of your daily tasks – Prompt Anatomy';
const OG_LIBRARY_DESCRIPTION =
  '8 exercises with ready-made templates – results in minutes. Free multilingual prompt library.';

const OG_PRIVACY_TITLE = 'Privacy policy – Prompt Anatomy';
const OG_PRIVACY_DESCRIPTION =
  'Prompt Anatomy prompt library. We do not collect personal data; localStorage only for prompt progress on your device.';

function ogLibraryBlock(pageUrl) {
  return `    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Prompt Anatomy">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="lt_LT">
    <meta property="og:locale:alternate" content="et_EE">
    <meta property="og:locale:alternate" content="lv_LV">
    <meta property="og:locale:alternate" content="ja_JP">
    <meta property="og:title" content="${OG_LIBRARY_TITLE}">
    <meta property="og:description" content="${OG_LIBRARY_DESCRIPTION}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${OG_IMAGE_URL}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${OG_IMAGE_ALT}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${OG_LIBRARY_TITLE}">
    <meta name="twitter:description" content="${OG_LIBRARY_DESCRIPTION}">
    <meta name="twitter:image" content="${OG_IMAGE_URL}">
    <meta name="twitter:image:alt" content="${OG_IMAGE_ALT}">`;
}

function ogPrivacyBlock(pageUrl) {
  return `    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Prompt Anatomy">
    <meta property="og:locale" content="en_US">
    <meta property="og:title" content="${OG_PRIVACY_TITLE}">
    <meta property="og:description" content="${OG_PRIVACY_DESCRIPTION}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${OG_IMAGE_URL}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="${OG_IMAGE_ALT}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${OG_PRIVACY_TITLE}">
    <meta name="twitter:description" content="${OG_PRIVACY_DESCRIPTION}">
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
  OG_IMAGE_URL,
  OG_IMAGE_ALT,
  HREFLANG_LIBRARY,
  HREFLANG_PRIVACY,
  OG_LIBRARY_TITLE,
  OG_LIBRARY_DESCRIPTION,
  OG_PRIVACY_TITLE,
  OG_PRIVACY_DESCRIPTION,
  ogLibraryBlock,
  ogPrivacyBlock,
  jsonLdLibrary,
};
