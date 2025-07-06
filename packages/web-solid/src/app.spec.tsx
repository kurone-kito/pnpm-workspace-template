import { expect, it } from 'vitest';
import App from './app.js';

it('should export function', () => expect(App).toBeTypeOf('function'));
