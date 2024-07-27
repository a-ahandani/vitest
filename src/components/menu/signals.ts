import { signal } from '@lit-labs/preact-signals';

export type MenuSignal = {
    isMenuOpen: boolean;
};
const menuState: MenuSignal = {
    isMenuOpen: false,
};

export const menuSignal = signal(menuState);
