export const swaggerOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'CInvest API Documentation',
      version: '0.1.0',
      description: 'List of all APIs',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'CInvest',
        url: 'https://cinvest.network',
        email: 'info@email.com',
      },
    },
    servers: [
      {
        url: process.env.API_URI,
      },
    ],
  },
  apis: ['src/modules/*/controller.ts', 'src/modules/*/*/controller.ts'],
};
