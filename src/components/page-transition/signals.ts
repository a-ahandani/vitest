import { signal } from '@lit-labs/preact-signals';

export type PageTransitionSignal = {
    state?: 'leave' | 'enter';
    data?: any;
};
const pageTransitionState: PageTransitionSignal = {
    state: undefined,
    data: undefined
};

export const pageTransitionSignal = signal(pageTransitionState);
