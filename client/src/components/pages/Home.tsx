import { getAll } from "@/graphql/quries/roomQuries";
import { useQuery } from "@apollo/client/react";
import type React from "react";
import type { RoomDto } from "../types/roomType";
import RoomCad from "../sharedComponents/Card";

const HomePage: React.FC = () => {
    const {data, loading, error} = useQuery(getAll);

    const rooms: RoomDto[] = data?.getAllRooms;

    return (
        <main className="layout">
            {
                loading && <p>Loading...</p>
            }

            <div>
                <h1 className="text-2xl font-bold ">Trending Rooms</h1>
                <p className="text-sm font-medium text-muted-foreground">Discover the most trending room and book it for unforgettable experience.</p>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {
                    rooms && !loading && !error && (
                        rooms.length > 0 && rooms.map((room: RoomDto) => (
                            <RoomCad key={room.id} room={room} />
                        ))
                        
                    )
                }
            </section>
        </main>
    );
};

export default HomePage;