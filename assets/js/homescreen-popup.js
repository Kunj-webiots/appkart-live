/*==========================
 add to home screen popup js
 ==========================*/
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   deferredPrompt = e;
// });

// const installApp = document.getElementById('installApp');

// installApp.addEventListener('click', async () => {
//   if (deferredPrompt !== null) {
//     deferredPrompt.prompt();
//     const {
//       outcome
//     } = await deferredPrompt.userChoice;
//     if (outcome === 'accepted') {
//       deferredPrompt = null;
//     }
//   }
// });

// let deferredPrompt = null;

// // Listen for beforeinstallprompt
// window.addEventListener('beforeinstallprompt', (e) => {
//   e.preventDefault();
//   deferredPrompt = e;

//   // Show install button if it exists
//   const installBtn = document.querySelector('.install-app');
//   if (installBtn) {
//     installBtn.style.display = 'inline-block';
//   }
// });

// // Handle install button click
// window.addEventListener('DOMContentLoaded', () => {
//   const installBtn = document.querySelector('.install-app');

//   if (installBtn) {
//     installBtn.addEventListener('click', async () => {
//       if (!deferredPrompt) return;

//       deferredPrompt.prompt();
//       const { outcome } = await deferredPrompt.userChoice;
//       if (outcome === 'accepted') {
//         deferredPrompt = null;
//         installBtn.style.display = 'none'; // Optional
//       }
//     });
//   }
// });






// let deferredPrompt = null;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();

//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;

//   // Show your install button
//   const installApp = document.getElementById('installApp');
//   installApp.style.display = 'block';
// });

// const installApp = document.getElementById('installApp');

// installApp.addEventListener('click', async () => {
//   if (deferredPrompt) {
//     // Show the install prompt
//     deferredPrompt.prompt();

//     // Wait for the user's response
//     const { outcome } = await deferredPrompt.userChoice;
//     console.log(`User response to the install prompt: ${outcome}`);

//     // Reset the deferredPrompt
//     deferredPrompt = null;
//   }
// });




let deferredPrompt;
const installApp = document.getElementById('installApp');

// Listen for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();            // Stop auto prompt
  deferredPrompt = e;            // Save event for later
  installApp.style.display = 'block'; // Show install button
});

// Handle click
installApp.addEventListener('click', async () => {
  if (!deferredPrompt) {
    console.log("Install prompt not available yet");
    return;
  }

  deferredPrompt.prompt(); // Show install dialog

  const { outcome } = await deferredPrompt.userChoice;
  console.log("User choice:", outcome);

  deferredPrompt = null;         // Reset
  installApp.style.display = 'none'; // Hide button again
});
