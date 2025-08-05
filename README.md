# Orogin's Arkenfox Override (DNS0 TRR-only Build)

This is a minimalist, usability-friendly `user-overrides.js` file for [arkenfox/user.js](https://github.com/arkenfox/user.js) — customized to use [DNS0.eu](https://dns0.eu) as the sole DNS resolver via DNS-over-HTTPS (TRR-only).

---

## 🔐 Features

* Uses **TRR-only** DNS mode (no system fallback)
* Fully routed through `zero.dns0.eu` (no logging, unfiltered)
* Disables telemetry, sponsored content, and built-in autofill
* Retains session, cookie, and history data
* Allows DRM and PDF viewer for usability
* LocalCDN-friendly (preserves cache)

---

## 📥 How to Use

1. Download or clone [arkenfox/user.js](https://github.com/arkenfox/user.js)
2. Save [`user-overrides.js`](./user-overrides.md) in the same directory
3. Place both files in your Firefox profile folder
4. Run the [arkenfox updater script](https://github.com/arkenfox/user.js/wiki/Updater-scripts) **or** manually apply them
5. Launch Firefox — settings will be applied on startup

---

## 📄 File Content

View the full `user-overrides.js` config here:
[→ user-overrides.md](./user-overrides.md)

---

## 🧑‍💻 Maintainer

**Orogin**
[github.com/Orogin](https://github.com/Orogin)

---

## ⚠️ Disclaimer

This configuration assumes external tools (like DNS0, uBlock Origin, etc.) handle additional filtering and privacy hardening. Adjust as needed for stricter threat models.

---

## 📝 License

This override is shared under the same terms as [arkenfox/user.js](https://github.com/arkenfox/user.js#license): MIT License.
