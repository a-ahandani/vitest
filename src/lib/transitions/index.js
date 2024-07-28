/* eslint-disable no-undef */
import barba from '@barba/core';
import { pageTransitionSignal } from '../../components/page-transition/signals';



barba.init({
    schema: {
    },
    transitions: [{
        name: 'default-transition',

        async leave() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        enter() {

        }
    }]
});
barba.hooks.beforeLeave((data) => {
    pageTransitionSignal.value = {
        ...pageTransitionSignal.value,
        state: 'start',
        data,
        loading: true,
        animating: true,
    };
});
barba.hooks.afterEnter((data) => {
    pageTransitionSignal.value = {
        ...pageTransitionSignal.value,
        state: 'end',
        data,
        loading: false,
    };
});
