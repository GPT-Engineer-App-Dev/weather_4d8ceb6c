import React, { useState } from "react";
import { Box, VStack, Text, Heading, HStack, Image, Divider, Spinner } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherApp = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Box p={4} bg="gray.100" minH="100vh">
      {loading ? (
        <VStack justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </VStack>
      ) : (
        <VStack spacing={6}>
          <HStack>
            <FaMapMarkerAlt />
            <Text fontWeight="bold">New York, NY</Text>
          </HStack>
          <Image src="https://images.unsplash.com/photo-1709263300564-f6a07dce2db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJ0bHklMjBjbG91ZHklMjBza3l8ZW58MHx8fHwxNzEwMDY2NDkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" />
          <Heading as="h1" size="4xl">
            19°
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Partly Cloudy
          </Text>
          <Text fontSize="sm" color="gray.500">
            H:24° L:18°
          </Text>
          <Divider />
          <HStack spacing={4}>
            <VStack>
              <Text fontWeight="bold">MON</Text>
              <Image src="https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW5ueSUyMHNreXxlbnwwfHx8fDE3MTAwNjY0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" boxSize="50px" />
              <Text>24°</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold">TUE</Text>
              <Image src="https://images.unsplash.com/photo-1532178910-7815d6919875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZHklMjBza3l8ZW58MHx8fHwxNzEwMDY2NDk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" boxSize="50px" />
              <Text>22°</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold">WED</Text>
              <Image src="https://images.unsplash.com/photo-1594652010347-788d009508c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWlueSUyMHNreXxlbnwwfHx8fDE3MTAwNjY0OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" boxSize="50px" />
              <Text>20°</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold">THU</Text>
              <Image src="https://images.unsplash.com/photo-1709754757358-d5f90f2befc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwYXJ0bHklMjBjbG91ZHklMjBza3l8ZW58MHx8fHwxNzEwMDY2NDkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" boxSize="50px" />
              <Text>23°</Text>
            </VStack>
            <VStack>
              <Text fontWeight="bold">FRI</Text>
              <Image src="https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzdW5ueSUyMHNreXxlbnwwfHx8fDE3MTAwNjY0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Weather" boxSize="50px" />
              <Text>25°</Text>
            </VStack>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};

export default WeatherApp;
