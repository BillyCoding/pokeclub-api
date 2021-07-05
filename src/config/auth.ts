export default {
  jwt: {
    secret: 'desafio-pokemon',
    expiresIn: '1d',
  },
};

// docker run --name pokeclub_postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
