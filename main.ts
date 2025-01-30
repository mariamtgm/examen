import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.ts";
import { schema } from "./schema.ts";
import montoose from "mongoose";

try {
  const MONGO_URL = Deno.env.get("MONGO_URL");
  if (!MONGO_URL) {
    throw new Error("Please provide a MongoDB connection string");
  }

  // Connect to MongoDB
  await montoose.connect(MONGO_URL);
} catch (e) {}

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, { listen: 8000 });
console.info(`🚀 Server ready at ${url}`);