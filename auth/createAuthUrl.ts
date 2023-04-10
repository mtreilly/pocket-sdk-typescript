type PlatformType = "ios" | "other";

export default function createAuthUrl(requestToken: string, redirectUri: string, platform: PlatformType): string {
  if (platform === "ios") {
    return `pocket-oauth-v1:///authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  } else {
    return `https://getpocket.com/auth/authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  }
}
