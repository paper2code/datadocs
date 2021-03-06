/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
// List of projects/orgs using your project for the users page.
const users = [{
    caption: 'Oleg Polakow',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/polakowo.jpg',
    infoLink: 'https://github.com/polakowo',
    pinned: true,
}, ];

const siteConfig = {
    title: 'datadocs', // Title for your website.
    tagline: 'Documentation for data enthusiasts',
    url: 'https://polakowo.github.io', // Your website URL
    baseUrl: '/datadocs/', // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'datadocs',
    organizationName: 'polakowo',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [{
        doc: 'machine-learning/linear-models',
        label: 'Docs'
    }, {
        href: 'https://github.com/polakowo/datadocs',
        label: 'GitHub'
    }],
    docsSideNavCollapsible: true,
    usePrism: ['python'],

    // If you have users set above, you add it here:
    users,

    /* path to images for header/footer */
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#3f3f3f',
        secondaryColor: '#3f3f3f'
    },

    /* Custom fonts for website */
    /*
    fonts: {
      myFont: [
        "Times New Roman",
        "Serif"
      ],
      myOtherFont: [
        "-apple-system",
        "system-ui"
      ]
    },
    */

    algolia: {
        apiKey: '6642fca03d716a543ac4428d7d20b842',
        indexName: 'polakowo-datadocs',
        algoliaOptions: {} // Optional, if provided by Algolia
    },

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} polakowo.io`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML',
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/datadocs/js/code-block-buttons.js',
        '/datadocs/js/disqus.js',
        'https://buttons.github.io/buttons.js'
    ],
    stylesheets: [
        'https://fonts.googleapis.com/css?family=Lato',
    ],
    gaTrackingId: 'UA-142521178-1',
    gaGtag: true,
    stylesheets: [],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: 'img/undraw_online.svg',
    twitterImage: 'img/undraw_tweetstorm.svg',

    // Show documentation's last contributor's name.
    enableUpdateBy: false,

    // Show documentation's last update time.
    enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;