import { Result } from '../types';

/**
 * Safely executes a function that might throw an error.
 * Returns a Result object representing success or failure.
 * 
 * @example
 * const result = safeExecute(() => JSON.parse(data));
 * if (result.success) {
 *   // Use result.data
 * } else {
 *   // Handle result.error
 * }
 */
export async function safeExecute<T>(fn: () => Promise<T> | T): Promise<Result<T, Error>> {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error : new Error(String(error)) 
    };
  }
}

/**
 * Delays execution for the specified number of milliseconds.
 */
export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));
