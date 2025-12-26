export type RoomDto = {
    roomNumber: string
    type: string
    pricePerNight: number
    capacity: number
    isAvailable: boolean
    images: RoomImageDtos[] // relations to RoomImages type
    reviews: string[]
    createdAt: string
    updatedAt: string
}

export type RoomImageDtos = {
    url: string
    public_id: string
}