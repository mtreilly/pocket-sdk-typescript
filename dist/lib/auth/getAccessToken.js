import { parseErrorResponse } from "./parseErrorResponse.js";
export default async function getAccessToken(consumerKey, code) {
    const OAUTH_AUTHORIZE_URL = "https://getpocket.com/v3/oauth/authorize";
    const requestData = {
        consumer_key: consumerKey,
        code,
    };
    const response = await fetch(OAUTH_AUTHORIZE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Accept": "application/json",
        },
        body: JSON.stringify(requestData),
    });
    if (!response.ok) {
        const error = await parseErrorResponse(response);
        throw new Error(`Access token error: ${error.code} - ${error.message}`);
    }
    return await response.json();
}
//# sourceMappingURL=getAccessToken.js.map