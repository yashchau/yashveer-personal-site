import posthog from 'posthog-js'

export const usePostHog = () => {
  return {
    capture: (event: string, properties?: Record<string, unknown>) => {
      if (typeof window !== 'undefined') {
        posthog.capture(event, properties)
      }
    },
    identify: (distinctId: string, properties?: Record<string, unknown>) => {
      if (typeof window !== 'undefined') {
        posthog.identify(distinctId, properties)
      }
    },
    reset: () => {
      if (typeof window !== 'undefined') {
        posthog.reset()
      }
    }
  }
}

// Direct access to PostHog for component usage
export { posthog }

