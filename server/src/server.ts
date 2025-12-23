import { dbConnect } from "./config/dbConfig";
import app from "./app";
import { config } from "./config/config";
import { startApolloServer } from "./apollo/apollo.server";

const main = async () => {
    try {
        await dbConnect();
        await startApolloServer(app);
        
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}

main();
