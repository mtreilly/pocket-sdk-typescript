interface RateLimitInfo {
  userLimit: number;
  userRemaining: number;
  userReset: number;
  keyLimit: number;
  keyRemaining: number;
  keyReset: number;
}

export function processRateLimitError(response: Response): RateLimitInfo {
  const userLimit = parseInt(response.headers.get("X-Limit-User-Limit") || "0", 10);
  const userRemaining = parseInt(response.headers.get("X-Limit-User-Remaining") || "0", 10);
  const userReset = parseInt(response.headers.get("X-Limit-User-Reset") || "0", 10);
  const keyLimit = parseInt(response.headers.get("X-Limit-Key-Limit") || "0", 10);
  const keyRemaining = parseInt(response.headers.get("X-Limit-Key-Remaining") || "0", 10);
  const keyReset = parseInt(response.headers.get("X-Limit-Key-Reset") || "0", 10);

  return {
    userLimit,
    userRemaining,
    userReset,
    keyLimit,
    keyRemaining,
    keyReset,
  };
}
