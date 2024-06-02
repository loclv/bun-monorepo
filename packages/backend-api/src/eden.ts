import { treaty } from '@elysiajs/eden';
import type { App } from 'backend';

export const api = treaty<App>('http://0.0.0.0:3000/');
