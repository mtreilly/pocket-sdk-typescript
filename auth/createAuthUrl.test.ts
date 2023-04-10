import createAuthUrl, { PlatformType } from "./createAuthUrl";

describe("createAuthUrl", () => {
  it("should return a correctly formatted ios URL", () => {
    const requestToken = "testRequestToken";
    const redirectUri = "testRedirectUri";
    const platform: PlatformType = "ios";

    const expectedUrl = `pocket-oauth-v1:///authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    const result = createAuthUrl(requestToken, redirectUri, platform);
    expect(result).toEqual(expectedUrl);
  });

  it("should return a correctly formatted other platform URL", () => {
    const requestToken = "testRequestToken";
    const redirectUri = "testRedirectUri";
    const platform: PlatformType = "other";

    const expectedUrl = `https://getpocket.com/auth/authorize?request_token=${requestToken}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    const result = createAuthUrl(requestToken, redirectUri, platform);
    expect(result).toEqual(expectedUrl);
  });
});
