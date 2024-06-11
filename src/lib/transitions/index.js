import anime from 'animejs/lib/anime.es.js';
import barba from '@barba/core';

barba.init({
    schema: {
    },
    transitions: [{
        name: 'default-transition',
        leave(data) {
            return anime({
                targets: data.current.container,
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeInOutQuad'
            }).finished;
        },
        enter(data) {
            return anime({
                targets: data.next.container,
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeInOutQuad'
            }).finished;
        }
    }]
});