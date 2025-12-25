import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json } from "express";
import { roomTypeDef } from "../typeDefs/roomTypeDef";
import { roomResolvers } from "../resolvers/room.resolver";

export const startApolloServer = async (app: Application) => {
    const typeDefs = [roomTypeDef];
    const resolvers = [roomResolvers];

    const schema = makeExecutableSchema({ 
        typeDefs, // define data type for GraphQL schema
        resolvers  // define how to fetch the data for each type
    });

    const apolloServer = new ApolloServer({
        schema,
    });

    await apolloServer.start();

    app.use('/graphql', json(), expressMiddleware(apolloServer));
}