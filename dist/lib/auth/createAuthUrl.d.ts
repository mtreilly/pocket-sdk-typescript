export type PlatformType = "ios" | "other";
export default function createAuthUrl(requestToken: string, redirectUri: string, platform: PlatformType): string;
