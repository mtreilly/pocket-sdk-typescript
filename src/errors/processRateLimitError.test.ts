import { processRateLimitError } from "./processRateLimitError";

function createMockResponse(headers: Record<string, string>): Response {
  return new Response(null, { headers: new Headers(headers) });
}

describe("processRateLimitError", () => {
  it("should process rate limit headers correctly", () => {
    const response = createMockResponse({
      "X-Limit-User-Limit": "100",
      "X-Limit-User-Remaining": "50",
      "X-Limit-User-Reset": "2000",
      "X-Limit-Key-Limit": "500",
      "X-Limit-Key-Remaining": "250",
      "X-Limit-Key-Reset": "4000",
    });

    const result = processRateLimitError(response);

    expect(result).toEqual({
      userLimit: 100,
      userRemaining: 50,
      userReset: 2000,
      keyLimit: 500,
      keyRemaining: 250,
      keyReset: 4000,
    });
  });

  it("should handle missing headers", () => {
    const response = createMockResponse({});

    const result = processRateLimitError(response);

    expect(result).toEqual({
      userLimit: 0,
      userRemaining: 0,
      userReset: 0,
      keyLimit: 0,
      keyRemaining: 0,
      keyReset: 0,
    });
  });
});
