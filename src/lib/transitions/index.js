import barba from '@barba/core';
// import { Html, easing } from '@mojs/core';
import { pageTransitionSignal } from '../../components/page-transition/signals';



barba.init({
    schema: {
    },
    transitions: [{
        name: 'default-transition',
        leave(data) {
            console.log('leave', data);
            // Leave animation
            // const leaveAnimation = new Html({
            //     el: data.current.container,
            //     duration: 2000,
            //     easing: easing.bezier(0.1, 0.7, 0.1, 0.9),
            //     // opacity: { 1: 0 },
            //     x: { 0: '100%' },
            // });
            // leaveAnimation.play();
            pageTransitionSignal.value = {
                ...pageTransitionSignal.value,
                state: 'leave',
                data,
            };
        },
        enter(data) {
            console.log('enter', data);
            // Enter animation
            // const enterAnimation = new Html({
            //     el: data.next.container,
            //     duration: 2000,
            //     easing: easing.bezier(0.1, 0.7, 0.1, 0.9),
            //     // opacity: { 0: 1 },
            //     x: { "-100%": 0 },
            // });
            // enterAnimation.play();
            pageTransitionSignal.value = {
                ...pageTransitionSignal.value,
                state: 'enter',
                data,
            };
        }
    }]
});
