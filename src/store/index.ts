import { writable } from 'svelte/store';

export const todos = writable([
  {
    text: 'todo',
  }
]);
