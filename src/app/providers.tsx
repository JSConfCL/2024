"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (
  typeof window !== "undefined" &&
  process.env.NEXT_PUBLIC_POSTHOG_KEY &&
  process.env.NEXT_PUBLIC_POSTHOG_HOST
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}
export function CSPostHogProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
