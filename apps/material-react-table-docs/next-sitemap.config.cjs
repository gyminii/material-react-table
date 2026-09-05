/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://mini7-material-react-table.vercel.app',
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
