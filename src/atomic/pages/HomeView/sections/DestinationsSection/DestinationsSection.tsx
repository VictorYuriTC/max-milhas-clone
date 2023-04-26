import { BOOKING_TYPES, IDestination } from "@/interfaces/IDestination";
import DestinationCard from "./components/DestinationCard/DestinationCard";
import { SectionContainer } from "./styles";
import Rome1 from "../../../../../../public/images/rome-1.webp";
import Rome2 from "../../../../../../public/images/rome-2.webp";
import Rome3 from "../../../../../../public/images/rome-3.webp";
import Flight from "../../../../../../public/images/flight.webp";

const mocks: IDestination[] = [
  {
    id: 1,
    bookingType: BOOKING_TYPES.FLIGHT,
    coupomName: "FCOMAXIMO",
    name: "Roma",
    description: "a partir de R$ 2384,32",
    discountValue: 40,
    coupomDescription: "Restam 12 coupons",
    image: Rome1,
  },

  {
    id: 2,
    bookingType: BOOKING_TYPES.HOTEL,
    coupomName: "FCOMAXIMO",
    name: "Roma",
    description: "Todas as hospedagens",
    discountValue: 10,
    coupomDescription: "Restam 19 coupons",
    image: Rome2,
  },

  {
    id: 3,
    bookingType: BOOKING_TYPES.PACKAGE,
    coupomName: "FCOMAXIMO",
    name: "Roma",
    description: "Pacotes com ofertas incríveis",
    discountValue: 10,
    coupomDescription: "Só hoje!",
    image: Rome3,
  },

  {
    id: 4,
    bookingType: BOOKING_TYPES.FLIGHT,
    coupomName: "FCOMAXIMO",
    name: "Roma",
    description: "Todas as hospedagens",
    discountValue: 10,
    image: Flight,
  },
];

export default function DestinationsSection() {
  return (
    <SectionContainer>
      {mocks.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </SectionContainer>
  );
}
