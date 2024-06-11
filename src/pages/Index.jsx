import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              My Personal Blog
            </Heading>
            <Flex>
              <Link as={RouterLink} to="/" px={4} color="white">
                Home
              </Link>
              <Link as={RouterLink} to="/about" px={4} color="white">
                About
              </Link>
              <Link as={RouterLink} to="/contact" px={4} color="white">
                Contact
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 1</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 2</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Blog Post Title 3</Heading>
            <Text mt={4}>This is a short excerpt from the blog post...</Text>
          </Box>
        </VStack>
      </Container>

      <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;