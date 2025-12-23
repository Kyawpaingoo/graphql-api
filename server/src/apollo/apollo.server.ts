import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json } from "express";

export const startApolloServer = async (app: Application) => {
    const typeDefs:any = [];
    const resolvers:any = [];

    const schema = makeExecutableSchema({ 
        typeDefs, 
        resolvers 
    });

    const apolloServer = new ApolloServer({
        schema,
    });

    await apolloServer.start();

    app.use('/graphql', json(), expressMiddleware(apolloServer));
}