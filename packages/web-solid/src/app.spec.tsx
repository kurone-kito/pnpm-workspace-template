import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import App from './app.js';

describe('Index', () => {
  it('Show the hello world', async () => {
    const { getByText } = render(() => <App />);
    expect(getByText('Hello, world!')).toBeDefined();
  });
});
