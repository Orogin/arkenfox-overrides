# Orogin’s Arkenfox user.js Overrides

**Version**: v135
**Date**: 05 Aug 2025
**Focus**: TRR-only setup using DNS0, with usability and privacy balanced

---

## 📄 Summary

This is a clean, pragmatic override file for [arkenfox/user.js](https://github.com/arkenfox/user.js), optimized for:

* DNS-over-HTTPS using [DNS0.eu](https://dns0.eu)
* Minimal telemetry
* No system DNS fallback
* Reasonable UX (DRM allowed, history/cookies retained)
* Compatibility with LocalCDN and external add-ons

Save this as `user-overrides.js` in your Firefox profile alongside `user.js`.

---

## 🛠 Configuration

### \[0] Global Safety Nets

```js
user_pref("browser.safebrowsing.malware.enabled", true);
user_pref("browser.safebrowsing.phishing.enabled", true);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

user_pref("dom.security.https_only_mode_send_http_background_request", true);
user_pref("privacy.purge_trackers.enabled", false);
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.trackingprotection.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.http.referer.XOriginPolicy", 2);
```

### \[1] Media & UX

```js
user_pref("media.eme.enabled", true);
user_pref("pdfjs.disabled", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("extensions.pocket.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.display.use_system_colors", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("layout.css.prefers-color-scheme.content-override", 0);
user_pref("browser.zoom.siteSpecific", true);
```

### \[2] DNS-over-HTTPS (DNS0 only)

```js
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://zero.dns0.eu/dns-query");
user_pref("network.trr.bootstrapAddress", "193.110.81.9");
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
user_pref("network.dns.skipTRR-when-portal-detected", false);
user_pref("network.trr.strict_native_fallback", false);
user_pref("network.trr.allow-rfc1918-names", true);
```

### \[3] Retain Cookies, Sessions & History

```js
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.formdata", false);
user_pref("places.history.enabled", true);
```

### \[4] Disable Firefox Password & Payment Storage

```js
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.management.page.enabled", false);

user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.promptAlwaysShow", false);
user_pref("dom.payments.request.enabled", false);
```

### \[5] Home & New Tab Customizations

```js
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtabpage.activity-stream.enabled", true);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.showTopSites", true);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 1);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
```

### \[6] Compatibility Tweaks

```js
user_pref("dom.security.https_first_pna.enable", true);
user_pref("extensions.quarantinedDomains.enabled", false);
```

---

## 💡 Usage Instructions

1. Download or clone the latest `user.js` from [arkenfox/user.js](https://github.com/arkenfox/user.js).
2. Save this file as `user-overrides.js` in the same folder.
3. Run your preferred [arkenfox updater script](https://github.com/arkenfox/user.js/wiki/Updater-scripts) or manually copy both files into your Firefox profile.
4. Launch Firefox. Your settings will apply automatically.

---

## 📉 Optional Enhancements

* Add [uBlock Origin](https://github.com/gorhill/uBlock) with your own filter lists
* Harden fingerprinting settings further if needed
* Swap DNS0 for other DoH providers (e.g. NextDNS, MullvadDNS) if you want filtering

---

## 🌟 Credit

Based on [arkenfox/user.js](https://github.com/arkenfox/user.js) — customized by **Orogin**

---

## 🚫 Disclaimer

This config disables several tracking protections assuming they are handled externally (e.g., via DNS0, uBO). Adjust as needed for your setup.
