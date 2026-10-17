import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("privacy notice identifies Dashboard Google data and user controls", () => {
  const source = readFileSync(new URL("./app/privacy-policy/page.tsx", import.meta.url), "utf8");
  for (const text of [
    "dashboard.digitalplat.org",
    "openid and email",
    "email-verification status",
    "stored with your DigitalPlat account",
    "Limited Use requirements",
    "third-party connections settings",
    "keeping another usable sign-in method",
    "contact@digitalplat.org",
  ]) {
    assert.ok(source.includes(text), `Missing disclosure: ${text}`);
  }
});
