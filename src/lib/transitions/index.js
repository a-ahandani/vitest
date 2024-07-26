import barba from '@barba/core';
import { Html, easing } from '@mojs/core';




barba.init({
    schema: {
    },
    transitions: [{
        name: 'default-transition',
        leave(data) {
            console.log('leave');
            // // Leave animation
            // const leaveAnimation = new Html({
            //     el: data.current.container,
            //     duration: 500,
            //     easing: easing.bezier(0.1, 0.7, 0.1, 0.9),
            //     opacity: { 1: 0 },
            //     x: { 0: 100 },
            // });
            // return leaveAnimation.play();
        },
        enter(data) {
            // Enter animation
            // const enterAnimation = new Html({
            //     el: data.next.container,
            //     duration: 500,
            //     easing: easing.bezier(0.1, 0.7, 0.1, 0.9),
            //     opacity: { 0: 1 },
            //     x: { "-100": 0 },
            // });
            // return enterAnimation.play();
        }
    }]
});
