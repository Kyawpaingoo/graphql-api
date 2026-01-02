import type React from "react"
import type { RoomDto } from "../types/roomType"
import { Card, CardContent, CardFooter } from "../ui/card"
import { MapPin, Star, Users } from "lucide-react"
import { Badge } from "../ui/badge" // Optional: if you use shadcn badges

type CardProps = {
  room: RoomDto
}

const RoomCard: React.FC<CardProps> = ({ room }: CardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl border-none shadow-md transition-all hover:shadow-xl cursor-pointer">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={room.images[0]?.url || "/placeholder-room.jpg"}
          alt={room.images[0]?.public_id || "Room Image"}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional: Add a "Featured" or "Price" badge over image */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-black hover:bg-white">Entire Room</Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title & Rating Row */}
        <div className="flex items-start justify-between">
          {/* <h3 className="font-semibold text-lg line-clamp-1 text-gray-800">
            {room. || "Beautiful Stay"}
          </h3> */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{room.reviews.length}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center mt-1 text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm truncate">{room.location}</span>
        </div>

        {/* Capacity/Amenities (Example addition) */}
        <div className="flex items-center mt-3 gap-3 text-xs text-gray-400">
          <div className="flex items-center">
            <Users className="w-3.5 h-3.5 mr-1" />
            <span>2 Guests</span>
          </div>
          <span>•</span>
          <span>{room.reviews.length} reviews</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-baseline gap-1">
        <span className="text-xl font-bold text-gray-900">${room.pricePerNight}</span>
        <span className="text-sm text-gray-500">/ night</span>
      </CardFooter>
    </Card>
  )
}

export default RoomCard