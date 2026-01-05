export type RoomDto = {
    id: string
    title: string
    roomNumber: string
    type: string
    description: string
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