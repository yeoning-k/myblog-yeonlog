export const hamburger = {
  container: {
    open: {
      opacity: 1,
      height: '100%'
    },
    closed: {
      opacity: 0,
      height: '0',
      transition: {
        delay: 0.25
      }
    }
  },
  gnb: {
    wrap: {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.5 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
    },
    item: {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
      }
    }
  },
  background: {
    open: {
      clipPath: `circle(150% at calc(((100% - var(--container-width))/2) + var(--container-width) - 20px) 35px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      },
      backgroundColor: 'rgb(255, 255, 255)'
    },
    closed: {
      clipPath: `circle(0px at calc(((100% - var(--container-width))/2) + var(--container-width) - 20px) 35px)`,
      transition: {
        duration: 0.5,
        ease: [1, 0.9, 0.6, 0.6]
      },
      backgroundColor: 'rgb(238, 238, 238)'
    }
  }
};
