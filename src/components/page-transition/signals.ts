import { signal } from '@lit-labs/preact-signals';

export type PageTransitionSignal = {
    state?: 'start' | 'end';
    data?: unknown;
    loading?: boolean;
    animating?: boolean;
};
const pageTransitionState: PageTransitionSignal = {
    state: undefined,
    data: undefined,
    loading: false,
    animating: false,
};

export const pageTransitionSignal = signal(pageTransitionState);
