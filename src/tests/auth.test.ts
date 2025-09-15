import { describe, expect, test } from "vitest";

import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "src/api/auth";

const validHeader: IncomingHttpHeaders = {
  authorization: "ApiKey mykey",
}

const invalidHeader: IncomingHttpHeaders = {
  authorization: "Key mykey",
}
describe("header", () => {
  test("getApikey returns key for valid header", () => {
    expect(getAPIKey(validHeader)).toBe("mykey");
  });

  test("getApikey fails for invalid header", () => {
    expect(getAPIKey(invalidHeader)).toBeTruthy();
  });
});

