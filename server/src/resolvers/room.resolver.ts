import { getAllRooms } from "../controller/room.controller";

export const roomResolvers = {
    Query: {
        getAllRooms: async (parent: any, args: any, context: any) => await getAllRooms(),
    }
};
