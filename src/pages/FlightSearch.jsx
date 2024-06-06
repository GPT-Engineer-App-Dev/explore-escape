import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Select, HStack } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    // Implement the search logic here
    console.log({
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
    });
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
      </VStack>
    </Container>
  );
};

export default FlightSearch;