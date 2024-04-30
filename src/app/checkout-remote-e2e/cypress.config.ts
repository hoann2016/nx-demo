import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run checkout-remote:serve:development',
        production: 'nx run checkout-remote:serve:production',
      },
      ciWebServerCommand: 'nx run checkout-remote:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
