import { Router } from "express";
import api from "../config/api";

const pokemonRouter = Router();


// Procurar pokemon pelo nome ou id
pokemonRouter.get("/:pokemonId", async (request, response) => {
  const { pokemonId } = request.params;

  const {data} = await api.get(`/${pokemonId}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    stats: data.stats,
    types: data.types,
    base_experience: data.base_experience,
    abilities: data.abilities,
    photo: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`
  }

  return response.json(pokemon);
});

// Lista de pokemons paginada
pokemonRouter.get("/:limit/:page", async (request, response) => {
  const { limit = "10", page = "1" } = request.params;

  const pokemons = await api.get("/", {
    params: {
      limit,
      offset: parseInt(limit) * (parseInt(page) - 1),
    },
  });

  return response.json(pokemons.data.results);
});

export default pokemonRouter;
