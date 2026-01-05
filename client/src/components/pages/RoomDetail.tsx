import { getRoomById } from '@/graphql/quries/roomQuries';
import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useParams } from 'react-router';
import type { RoomDto } from '../types/roomType';
import { BadgeCheck, Hash, House, MapPinned, User, X, Star, Calendar } from 'lucide-react';

const RoomDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useQuery(getRoomById, { variables: { id: id } });
    
    const room: RoomDto = data?.getRoomById;

    if (loading) return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );
    
    if (error) return <div className="p-10 text-center text-red-500">Error loading room details.</div>;
    if (!room) return <div className="p-10 text-center text-gray-500">Room not found.</div>;

    const highlights = [
        { label: 'Capacity', value: `${room.capacity} Guests`, icon: <User className='w-5 h-5' /> },
        { label: 'Type', value: room.type, icon: <House className='w-5 h-5' /> },
        { label: 'Location', value: room.location, icon: <MapPinned className='w-5 h-5' /> },
    ];

    return (
        <main className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                
                {/* Left Column: Image Gallery */}
                <div className='lg:col-span-7 space-y-4'>
                    <div className="overflow-hidden rounded-3xl shadow-lg bg-gray-100">
                        <img 
                            src={room.images?.[0]?.url} 
                            alt={room.title} 
                            className='w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500' 
                        />
                    </div>
                    {/* Placeholder for mini-gallery if you have more images */}
                    <div className="grid grid-cols-4 gap-4">
                        {room.images?.slice(1, 5).map((img, i) => (
                            <img key={i} src={img.url} className="rounded-xl aspect-square object-cover cursor-pointer opacity-80 hover:opacity-100" alt={img.public_id} />
                        ))}
                    </div>
                </div>

                {/* Right Column: Content & Booking */}
                <div className='lg:col-span-5 space-y-8'>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                <Hash className="w-3 h-3" /> {room.roomNumber}
                            </span>
                            {room.isAvailable ? (
                                <span className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <BadgeCheck className="w-3 h-3" /> Available
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    <X className="w-3 h-3" /> Booked
                                </span>
                            )}
                        </div>
                        <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight'>{room.title}</h1>
                        <div className="flex items-center mt-3 text-amber-500">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            <span className="ml-2 text-sm text-slate-500 font-medium">({room.reviews.length} reviews)</span>
                        </div>
                    </div>

                    <p className='text-lg leading-relaxed text-slate-600'>{room.description}</p>

                    {/* Features Grid */}
                    <div className='grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100'>
                        {highlights.map((item, index) => (
                            <div key={index} className='flex flex-col items-center text-center gap-2'>
                                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-slate-400 font-bold">{item.label}</p>
                                    <p className='text-sm font-semibold text-slate-800'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price & CTA Card */}
                    <div className="p-6 border-2 border-slate-900 rounded-3xl space-y-4">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Total Price</p>
                                <p className='text-3xl font-black text-slate-900'>${room.pricePerNight}<span className="text-lg font-normal text-slate-500">/night</span></p>
                            </div>
                            <Calendar className="w-8 h-8 text-slate-300" />
                        </div>
                        <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-xl active:scale-[0.98]">
                            Reserve Room Now
                        </button>
                        <p className="text-center text-xs text-slate-400">You won't be charged yet</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RoomDetail;