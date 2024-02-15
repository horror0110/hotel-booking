import { prisma } from "@/lib/prismadb";

export const getHotelById = async (hotelId: string) => {
  try {
    const hotel = await prisma.hotel.findUnique({
      where: {
        id: hotelId,
      },
      include: {
        rooms: true,
      },
    });
          
    if (!hotel) return null;

    return hotel;
  } catch (err: any) {
    throw new Error(err);
  }
};