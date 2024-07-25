export const styles = () => ({
    active: {},
    burgerIcon: {
        position: 'relative',
        cursor: 'pointer',
        zIndex: "var(--layer-4)",
        '& input': {
            display: 'block',
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            zIndex: 'var(--layer-2)',
            WebkitTouchCallout: 'none',
            position: 'relative',
            opacity: 0,
        },
        '& div': {
            margin: 'auto',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            '& span': {
                position: 'absolute',
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'var(--color-grey-950)',
                borderRadius: '1px',
                transition: 'all 0.2s var(--ease-in-out-quint)',
                '&:first-of-type': {
                    top: 0,
                },
                '&:last-of-type': {
                    bottom: 0,
                },
            },
        },
        '& $active, input:checked + div': {
            '& span': {
                backgroundColor: 'var(--color-white)',
                '&:first-of-type': {
                    transform: 'rotate(45deg)',
                    top: 5,
                },
                '&:last-of-type': {
                    transform: 'rotate(-45deg)',
                    bottom: 5,
                },
            },
        },
    },
    extraLarge: {
        width: 54,
        height: 26,
        '& div': {
            width: 48,
            height: 12,
            '& span': {
                height: 2,
            },
        },
        '& $active, input:checked + div': {
            height: 22,
            width: 28,
            '& span': {
                '&:first-of-type': {
                    top: 9,
                },
                '&:last-of-type': {
                    bottom: 11,
                },
            },
        },
    },
});
