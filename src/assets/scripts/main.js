/* eslint-disable no-undef */

/* SERVICE WORKER */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').catch((error) => {
    console.error('Failure!', error);
  });
}