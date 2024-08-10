import * as dotenv from 'dotenv';

dotenv.config();

export function env(key: string): string {
  return process.env?.[key] ?? '';
}
