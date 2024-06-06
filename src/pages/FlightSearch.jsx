import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Select, HStack, Box, Text } from "@chakra-ui/react";

const BookingConfirmation = ({ details }) => (
  <Box mt={8} p={4} borderWidth="1px" borderRadius="md" width="100%">
    <Heading as="h3" size="lg" mb={4}>Booking Confirmation</Heading>
    <Text><strong>Booking ID:</strong> {details.bookingId}</Text>
    <Text><strong>Departure:</strong> {details.departure}</Text>
    <Text><strong>Arrival:</strong> {details.arrival}</Text>
    <Text><strong>Departure Date:</strong> {details.departureDate}</Text>
    <Text><strong>Return Date:</strong> {details.returnDate}</Text>
    <Text><strong>Passengers:</strong> {details.passengers}</Text>
  </Box>
);

const FlightSearch = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    // Implement the search logic here
    const bookingInfo = {
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
      bookingId: Math.floor(Math.random() * 1000000),
    };
    setBookingDetails(bookingInfo);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} width="100%">
        <Heading as="h2" size="xl">Search Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <HStack width="100%">
          <FormControl id="departure-date">
            <FormLabel>Departure Date</FormLabel>
            <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
          </FormControl>
          <FormControl id="return-date">
            <FormLabel>Return Date</FormLabel>
            <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </FormControl>
        </HStack>
        <FormControl id="passengers">
          <FormLabel>Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>
          Search Flights
        </Button>
      {bookingDetails && <BookingConfirmation details={bookingDetails} />}
      </VStack>
    </Container>
  );
};

export default FlightSearch;