import helloWorld from '@kurone-kito/pwt-lib';
import type { Component } from 'solid-js';
import './app.css';

/**
 * The main application component.
 * @returns The component.
 */
const App: Component = () => (
  <article class="flex gap-2 items-center">
    <i class="vrc-icon-Document" />
    <h1>{helloWorld}</h1>
  </article>
);

export default App;
