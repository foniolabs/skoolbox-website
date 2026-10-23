// The installer is too large to ship from this repo/Vercel, so it is hosted
// in a Cloudflare R2 bucket served at download.skoolbox.xyz. Bump these on each release.
export const WINDOWS_VERSION = "0.1.0";
// The offline installer bundles the AI model weights; the plain NSIS setup
// does not, and the app can't fetch them later, so always link this one.
export const WINDOWS_SIZE = "2.6 GB";
export const WINDOWS_DOWNLOAD_URL = `https://download.skoolbox.xyz/SkoolBox_${WINDOWS_VERSION}_x64-offline-setup.exe`;
