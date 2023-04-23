interface AccessTokenResponse {
    access_token: string;
    username: string;
}
export default function getAccessToken(consumerKey: string, code: string): Promise<AccessTokenResponse>;
export {};
