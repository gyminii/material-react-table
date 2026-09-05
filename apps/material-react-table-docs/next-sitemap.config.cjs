/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://material-react-table.minii.dev',
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
