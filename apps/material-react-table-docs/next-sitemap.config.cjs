/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://mini7-material-react-table.tyler7688.workers.dev',
  generateRobotsTxt: true,
  changefreq: null,
  priority: null,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/data', '/proxy'],
      },
    ],
  },
};

module.exports = config;
