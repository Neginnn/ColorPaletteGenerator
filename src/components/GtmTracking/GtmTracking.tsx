import Script from 'next/script';

export function GtmTracking() {
  const loadGoogleTagManagerSnippet = () => {
    return {
      __html: `
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0];
        var j = d.createElement(s);
        var dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl + "${
          process.env.GOOGLE_TAG_MANAGER_CONTAINER ?? ''
        }";
        f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "${process.env.GOOGLE_TAG_MANAGER_ID}");
      `
    };
  };

  return (
    <Script
      id="googleTagManager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={loadGoogleTagManagerSnippet()}
    />
  );
}
