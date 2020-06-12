document.addEventListener('DOMContentLoaded', function() {
    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      document.getElementById('load').innerHTML = `loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      document.getElementById('load').innerHTML = 'Error loading, check the console.';
    }
  });