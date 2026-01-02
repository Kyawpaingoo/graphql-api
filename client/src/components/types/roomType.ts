export type RoomDto = {
    id: string
    roomNumber: string
    type: string
    pricePerNight: number
    capacity: number
    isAvailable: boolean
    images: RoomImageDtos[] // relations to RoomImages type
    location: string
    reviews: string[]
    createdAt: string
    updatedAt: string
}

export type RoomImageDtos = {
    url: string
    public_id: string
}