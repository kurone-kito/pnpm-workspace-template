import helloWorld from '@kurone-kito/pwt-lib';
import type { Component } from 'solid-js';

/**
 * The main application component.
 * @returns The component.
 */
const App: Component = () => <h1>{helloWorld}</h1>;

export default App;
