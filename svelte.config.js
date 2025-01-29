

import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: [] // Vide pour éviter des erreurs de rendu
    }
  }
};
