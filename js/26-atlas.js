// Token configuration for the offline server and client.
window.atlas = window.atlas || {};
if (!Array.isArray(window.atlas.a)) window.atlas.a = [];
if (!Array.isArray(window.atlas.c)) window.atlas.c = [];

// This token stays in this browser's storage; never commit its value.
// Run setLocalDeveloperToken() in the browser console, then reconnect.
// Run clearLocalDeveloperToken() to remove it, then reconnect.
(() => {
    const storageKey = "woomy.localDeveloperToken";
    const applyToken = token => {
        if (token) window.atlas.b = token;
        else delete window.atlas.b;
    };
    try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved && saved.length <= 64 && saved === saved.trim()) applyToken(saved);
    } catch (_) {
        // Storage may be unavailable; the game can still start normally.
    }
    window.setLocalDeveloperToken = token => {
        if (token === undefined) token = window.prompt("Choose a local developer token (1–64 characters):");
        if (token === null) return false;
        if (typeof token !== "string" || !token.trim() || token.trim().length > 64) {
            throw new Error("The local developer token must contain 1–64 characters.");
        }
        token = token.trim();
        // Persist first so a storage error cannot silently create a temporary token.
        window.localStorage.setItem(storageKey, token);
        applyToken(token);
        return true;
    };
    window.clearLocalDeveloperToken = () => {
        window.localStorage.removeItem(storageKey);
        applyToken(null);
        return true;
    };
})();
