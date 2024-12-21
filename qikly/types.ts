export interface User {
   username: string;
   email: string;
}

export interface Ride {
   id: string;
   type: string;
   from: string;
   to: string;
   price: number;
   estimatedTime: string;
   available: boolean;
   image: string;
}

export interface RideContextType {
   bookingCount: number;
   incrementBookings: () => void;
}
