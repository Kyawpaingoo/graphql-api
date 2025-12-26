import { RoomModel } from "../models/room.model";
import { RoomDto } from "../type/room.type";

export const insertRoom = async (room: RoomDto): Promise<string> => {
    const result = await RoomModel.create(room);
    return `Room Number ${result.roomNumber} created successfully.`;
}

export const getAllRooms = async () => {
    const rooms = await RoomModel.find();
    return rooms;
}

export const getRoomById = async (id: string) => {
    const room = await RoomModel.findById(id);

    if(!room) throw new Error("Room not found");

    return room;
}

export const getRoomByNumber = async (roomNumber: string) => {
    const room = await RoomModel.findOne({
        roomNumber: roomNumber
    });

    if(!room) throw new Error("Room not found");

    return room;
}

export const updateRoom = async (id: string, room: RoomDto): Promise<string> => {
    const existingRoom = await RoomModel.findById(id);

    if(!existingRoom) throw new Error("Room not found");

    const updatedRoom = await existingRoom.set(room).save();

    return `Room Number ${updatedRoom.roomNumber} updated successfully.`;
}

export const deleteRoom = async (id: string): Promise<string> => {
    const existingRoom = await RoomModel.findById(id);

    if(!existingRoom) throw new Error("Room not found");

    await existingRoom.deleteOne();
    return `Room Number ${existingRoom.roomNumber} deleted successfully.`;
}