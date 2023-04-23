import { parseErrorResponse } from "./parseErrorResponse.js";

interface AccessTokenResponse {
  access_token: string;
  username: string;
}

export default async function getAccessToken(consumerKey: string, code: string): Promise<AccessTokenResponse> {
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
