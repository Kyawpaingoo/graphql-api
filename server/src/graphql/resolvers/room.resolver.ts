
import { deleteRoom, getAllRooms, getRoomById, getRoomByNumber, insertRoom, updateRoom } from '../../service/room.service';
import { RoomDto } from '../../type/room.type';

export const roomResolvers = {
    Query: {
        getAllRooms: async (parent: any, args: any, context: any) => await getAllRooms(),
        getRoomById: async (parent: any, {id}: {id: string}, context: any) => await getRoomById(id),
        getRoomByNumber: async (parent: any, {roomNumber}: {roomNumber: string}, context: any) =>  await getRoomByNumber(roomNumber),
    },
    Mutation: {
        createRoom: async (parent: any, {room}: {room: RoomDto}, context: any)  => await insertRoom(room),
        updateRoom: async (parent: any, {id, room}: {id: string, room: RoomDto}, context: any)  => await updateRoom(id, room),
        deleteRoom: async (parent: any, {id}: {id: string}, context: any)  => await deleteRoom(id),
    }
};
