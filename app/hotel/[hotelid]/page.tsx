import { getHotelById } from "@/actions/getHotelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { auth } from "@clerk/nextjs";

interface HotelPageProps {
  params: {
    hotelid: string;
  };
}

const Hotel: React.FC<HotelPageProps> = async ({ params }) => {
  const hotel: any = await getHotelById(params.hotelid);

  const {userId} = auth();


  if (!userId) {
    return <div>Not authenticated...</div>;
  }

  if (hotel && hotel.userId !== userId) return <div>Access denied...</div>;

  return (
    <div>
      <AddHotelForm hotel={hotel} />
    </div>
  );
};

export default Hotel;
