import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// Every docs page is prerendered at build time and nothing uses ISR,
// so no incremental cache binding is configured.
export default defineCloudflareConfig({});
