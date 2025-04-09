import { AppConfig } from '../types';

/**
 * Default application configuration.
 */
export const defaultConfig: AppConfig = {
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  logLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
};

/**
 * Gets the current application configuration.
 * Merges default config with environment variables.
 */
export function getConfig(): AppConfig {
  return {
    ...defaultConfig,
    // Add environment variable overrides here
  };
}
