/**
 * Base configuration for the application.
 * @property {string} environment - The current environment (development, production, etc.)
 * @property {LogLevel} logLevel - The logging level
 */
export interface AppConfig {
  environment: 'development' | 'test' | 'production';
  logLevel: LogLevel;
}

/**
 * Available logging levels.
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Result of an operation that may succeed or fail.
 * @template T - The type of data returned on success
 * @template E - The type of error returned on failure
 */
export type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };
