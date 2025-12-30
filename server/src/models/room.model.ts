import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
    {
        roomNumber: {
            type: String,
            required: [true, "Please enter room number"]
        },
        type: {
            type: String,
            required: [true, "Please enter room type"]
        },
        pricePerNight: {
            type: Number,
            required: [true, "Please enter price per night"]
        },
        capacity: {
            type: Number,
            required: [true, "Please enter capacity"]
        },
        isAvailable: {
            type: Boolean,
            required: [true, "Please enter is available"],
            default: true
        },
        location: {
            type: String,
            required: [true, "Please enter location"]
        },
        images: [{
            url: String,
            public_id: String
        }],
        reviews: [String],
        createdAt: {
            type: String
        },
        updatedAt: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export const RoomModel = mongoose.model('Room', roomSchema);