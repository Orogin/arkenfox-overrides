/**********************************************************************
 *  Orogin’s pragmatic arkenfox overrides
 *  for arkenfox user.js  v135 — 05 Aug 2025   (TRR-only build)
 **********************************************************************/

/*** 0 · Global safety-nets ***************************************************/

user_pref("browser.safebrowsing.malware.enabled",            true);
user_pref("browser.safebrowsing.phishing.enabled",           true);
user_pref("browser.safebrowsing.downloads.enabled",          false);
user_pref("browser.safebrowsing.downloads.remote.enabled",   false);

user_pref("dom.security.https_only_mode_send_http_background_request", true);

user_pref("privacy.purge_trackers.enabled",  false);   // keep LocalCDN cache
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.trackingprotection.enabled", false);
user_pref("network.cookie.cookieBehavior",         1);  // block 3-party cookies
user_pref("network.http.referer.XOriginPolicy",    2);

/**********************************************************************
 * 1 · Media & UX
 **********************************************************************/

user_pref("media.eme.enabled",                       true);
user_pref("pdfjs.disabled",                          false);
user_pref("browser.tabs.closeWindowWithLastTab",     false);

user_pref("extensions.pocket.enabled",                        		false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",	true);
user_pref("browser.display.use_system_colors",                		false);

user_pref("privacy.resistFingerprinting.letterboxing", 				false);
user_pref("layout.css.prefers-color-scheme.content-override", 		0);
user_pref("browser.zoom.siteSpecific", 								true);

/**********************************************************************
 * 2 · DNS-over-HTTPS to DNS0  (TRR-only)
 **********************************************************************/

user_pref("network.trr.mode", 3);              // 3 = DoH only, no fallback
user_pref("network.trr.uri", "https://zero.dns0.eu/dns-query");
user_pref("network.trr.bootstrapAddress", "193.110.81.9");
user_pref("network.dns.skipTRR-when-parental-control-enabled",	false);
user_pref("network.dns.skipTRR-when-portal-detected",			false);
user_pref("network.trr.strict_native_fallback",					false);
user_pref("network.trr.allow-rfc1918-names",					true);

/**********************************************************************
 * 3 · Keep cookies, sessions & history
 **********************************************************************/

user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("privacy.clearOnShutdown.cookies",     false);
user_pref("privacy.clearOnShutdown.history",     false);
user_pref("privacy.clearOnShutdown.sessions",    false);
user_pref("privacy.clearOnShutdown.cache",       false);
user_pref("privacy.clearOnShutdown.formdata",    false);
user_pref("places.history.enabled",              true);

/**********************************************************************
 * 4 · Disable Firefox password & payment storage
 **********************************************************************/

user_pref("signon.rememberSignons",          false);
user_pref("signon.autofillForms",            false);
user_pref("signon.autofillForms.http",       false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.management.page.enabled",  false);

user_pref("extensions.formautofill.creditCards.enabled",          false);
user_pref("extensions.formautofill.creditCards.available",        false);
user_pref("extensions.formautofill.creditCards.promptAlwaysShow", false);
user_pref("dom.payments.request.enabled",                         false);

/**********************************************************************
 * 5 · Firefox-Home (Shortcuts) for new windows & tabs
 **********************************************************************/

user_pref("browser.startup.page",     1);           // new window → about:home
user_pref("browser.startup.homepage", "about:home");

user_pref("browser.newtabpage.enabled",                                 true);
user_pref("browser.newtabpage.activity-stream.enabled",                 true);
user_pref("browser.newtabpage.activity-stream.feeds.topsites",          true);
user_pref("browser.newtabpage.activity-stream.showTopSites",            true);
user_pref("browser.newtabpage.activity-stream.topSitesRows",            1);

user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored",            false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",    false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled",  false);

/**********************************************************************
 * 6 · Compatibility tweaks
 **********************************************************************/

user_pref("dom.security.https_first_pna.enable",   true);
user_pref("extensions.quarantinedDomains.enabled", false);

/**********************************************************************
 *  END  – Restart Firefox to apply
 **********************************************************************/
