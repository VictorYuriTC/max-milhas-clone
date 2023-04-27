import BookingTypeCard, {
  IBookingCard,
} from "./components/BookingTypeCard/BookingTypeCard";
import { SearchMenu, SectionContainer } from "./styles";
import { BsAirplane } from "react-icons/bs";
import { IoMdBed } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { useState } from "react";

enum BOOKING_TYPES {
  FLIGHTS = "Passagens aéreas",
  HOTELS = "Hotéis",
  PACKAGES = "Pacotes",
}

const allBookingCards: IBookingCard[] = [
  {
    id: 1,
    bookingType: BOOKING_TYPES.FLIGHTS,
    svg: (
      <BsAirplane
        style={{
          width: "16px",
          height: "16px",
        }}
      />
    ),
  },

  {
    id: 2,
    bookingType: BOOKING_TYPES.HOTELS,
    svg: (
      <IoMdBed
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    ),
  },

  {
    id: 3,
    bookingType: BOOKING_TYPES.PACKAGES,
    svg: (
      <FaAddressCard
        style={{
          width: "20px",
          height: "20px",
        }}
      />
    ),
  },
];

export default function SearchDestinationSection() {
  const [selectedBookingType, setSelectedBookingType] = useState<string>(
    BOOKING_TYPES.FLIGHTS
  );

  function handleOnClickBookingTypeCard(bookingType: string) {
    setSelectedBookingType(bookingType);
  }

  return (
    <SectionContainer>
      <SearchMenu>
        {allBookingCards.map((card) => (
          <BookingTypeCard
            key={card.id}
            cardData={card}
            isSelected={card.bookingType === selectedBookingType}
            onClick={() => handleOnClickBookingTypeCard(card.bookingType)}
          />
        ))}
      </SearchMenu>
    </SectionContainer>
  );
}
