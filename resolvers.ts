export const resolvers = {
  Query: {
    test: async (_: unknown): Promise<String | null> => {
      return await "Hola";
    }
  },
}