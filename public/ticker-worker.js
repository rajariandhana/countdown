let timerId;

self.onmessage = function(e) {
  if (e.data === 'start') {
    if (!timerId) {
      timerId = setInterval(() => {
        self.postMessage({ type: 'tick', now: Date.now() });
      }, 1000); // could be lower if you want smoother updates
    }
  } else if (e.data === 'stop') {
    clearInterval(timerId);
    timerId = null;
  }
};
