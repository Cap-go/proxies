export default {
  async fetch(request) {
    const url = new URL(request.url);

    const directMap = {
      '/js/pixel.min.js': 'https://cdn.affonso.io/js/pixel.min.js',
      '/js/psl.min.js': 'https://cdn.affonso.io/js/psl.min.js',
      '/v1/track': 'https://api.affonso.io/v1/track',
      '/js/signups': 'https://api.affonso.io/v1/signups',
      '/r/pixel.js': 'https://cdn.affonso.io/js/pixel.min.js',
      '/r/psl.min.js': 'https://cdn.affonso.io/js/psl.min.js',
      '/r/v1/track': 'https://api.affonso.io/v1/track',
      '/r/signups': 'https://api.affonso.io/v1/signups',
    };

    if (directMap[url.pathname]) {
      return fetch(new Request(directMap[url.pathname], request));
    }

    return fetch(request);
  },
};
