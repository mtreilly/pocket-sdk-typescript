import { parseErrorResponse } from "./parseErrorResponse.js";
const OAUTH_REQUEST_URL = "https://getpocket.com/v3/oauth/request";
function getRequestTokenUrl(consumerKey, redirectUri, state) {
    const requestData = {
        consumer_key: consumerKey,
        redirect_uri: redirectUri,
        state,
    };
    return fetch(OAUTH_REQUEST_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Accept": "application/json",
        },
        body: JSON.stringify(requestData),
    });
}
export default async function getRequestToken(consumerKey, redirectUri, state) {
    const response = await getRequestTokenUrl(consumerKey, redirectUri, state);
    if (!response.ok) {
        const error = await parseErrorResponse(response);
        throw new Error(`Request token error: ${error.code} - ${error.message}`);
    }
    const data = await response.json();
    return data.code;
}
//# sourceMappingURL=getRequestToken.js.map