const OPACITY = 0.85;

export default {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: '1000',
    opacity: OPACITY,
    background: 'white',
    animation: '$overlayAnimation 0.2s',
  },
  // animation for showing overlay
  '@keyframes overlayAnimation': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: OPACITY,
    },
  },
  container: {
    position: 'fixed',
    background: 'white',
    top: '50%',
    left: '50%',
    padding: '40px',
    maxHeight: 'calc(100% - 100px)',
    maxWidth: 'calc(100% - 100px)',
    borderRadius: '10px',
    zIndex: '1010',
    overflowY: 'auto',
    boxShadow: '0px 0px 2px 2px #E0E0E0',
    transform: 'translate(-50%, -50%)', // centering modal
    animation: '$modalAnimation 0.2s',
  },
  // animation for moving modal to top
  '@keyframes modalAnimation': {
    from: {
      top: '100%',
    },
    to: {
      top: '50%',
    },
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    marginBottom: 0,
    minWidth: '80px',
  },
};
