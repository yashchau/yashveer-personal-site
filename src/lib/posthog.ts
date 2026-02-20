// PostHog analytics removed. Stub kept so import sites don't need updating.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noop = (..._args: unknown[]) => {};

export const usePostHog = () => ({
  capture: noop,
  identify: noop,
  reset: noop,
});

export const posthog = {
  capture: noop,
  identify: noop,
  reset: noop,
};
