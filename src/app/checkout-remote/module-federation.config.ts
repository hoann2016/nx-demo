import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout-remote',
  exposes: {
    './Routes': 'src/app/checkout-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
