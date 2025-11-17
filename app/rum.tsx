"use client";

import { AwsRum, AwsRumConfig } from "aws-rum-web";

export default function RumInitializer() {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      endpoint: "https://dataplane.rum.us-east-2.amazonaws.com",
      telemetries: ["performance", "errors", "http"],
      allowCookies: true,
      enableXRay: true,
      signing: true
    };

    const APPLICATION_ID = "047bc493-c1f3-4be8-bf21-d7fe3114346b";
    const APPLICATION_VERSION = "1.0.0";
    const APPLICATION_REGION = "us-east-2";

    new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
  } catch (error) {
    // Ignore CloudWatch RUM initialization errors
  }

  return null;
}
