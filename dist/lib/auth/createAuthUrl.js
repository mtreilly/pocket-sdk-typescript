export default function createAuthUrl(requestToken, redirectUri, platform) {
    if (platform === "ios") {
        return `pocket-oauth-v1:///authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    }
    else {
        return `https://getpocket.com/auth/authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    }
}
//# sourceMappingURL=createAuthUrl.js.map