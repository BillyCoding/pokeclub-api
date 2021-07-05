const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Pokeclub API',
    description: 'Documentação da Pokeclub API.',
  },
  host: 'localhost:3333',
  schemes: ['http'],
};

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)
