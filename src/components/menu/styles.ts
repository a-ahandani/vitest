import { css } from "lit";

export default css`
  #menu_list {
    width: 400px;
    height: 500px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .c-site-header__bg {
    --banner-padding: 8px;
    border-radius: var(--banner-padding);
    transition: transform 1.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translate(-2px, 2px) scale(1) rotate(1deg);
    cursor: pointer;
    transform-origin: 100% 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: transform 1.5s cubic-bezier(0.86, 0, 0.07, 1);
    pointer-events: none;
    overflow: hidden;
    border-radius: var(--banner-padding);
    transition: transform 1.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translate(-2px, 2px) scale(1) rotate(1deg);
    cursor: pointer;
    transform-origin: 100% 0;
  }
  .c-site-header__bg::before,
  .c-site-header__bg::after {
    transition: transform 1.5s cubic-bezier(0.23, 1, 0.32, 1);
    transform: translate(130px, 0) rotate(15deg) scale(1.3, 0);
    transform-origin: 100% 0;
  }
  .c-site-header__bg::before,
  .c-site-header__bg::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #868686;
    content: "";
    pointer-events: none;
  }
  .c-site-header__bg::after {
    background: var(--color-green-300);
  }
  .c-site-header__bg::before {
    transition-delay: 0.05s;
  }
  .c-site-header__menu {
    /* --space-7xl: clamp(10rem, calc(9.69rem + 1.56vw), 11.25rem);
    position: absolute;
    top: 0;
    right: 0;
    min-width: calc(var(--space-7xl) * 2.5); */
  }
  .menu-active .c-site-header__bg {
    /* --translate: calc(var(--container-padding) / 2);
    transform: translate(var(--translate), calc(var(--translate) * -1)) scale(1.1); */
  }
  .menu-active .c-site-header__bg::before {
    /* transition-delay: 0s; */
  }
  .menu-active .c-site-header__bg::before,
  .menu-active .c-site-header__bg::after {
    /* transform: translateX(0) rotate(0) scale(1.3, 1); */
  }
  .menu-active .c-site-header__bg::after {
    /* transition-delay: 0.05s; */
  }
  .menu-active ul li {
    opacity: 1;
    transform: none;
    transition:
      transform 1.1s cubic-bezier(0.23, 1, 0.32, 1),
      opacity 1.3s cubic-bezier(0.23, 1, 0.32, 1),
      color 0.5s;
    transition-delay: calc(var(12) * 0.065s + 0.1s);
  }
`;
