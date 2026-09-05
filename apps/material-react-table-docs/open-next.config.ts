import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// Every docs page is prerendered at build time and nothing uses ISR,
// so no incremental cache binding is configured.
const config = defineCloudflareConfig({});

// Emotion's exports map points the "workerd" condition at edge-light builds
// that Next.js's file tracing never copies into the standalone output.
// Resolving with Next's own Node conditions keeps the traced files in use.
config.cloudflare = { ...config.cloudflare, useWorkerdCondition: false };

export default config;
