import { Box, Container, Flex, Heading, Link, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

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
              <Button as={RouterLink} to="/add-post" ml={4} colorScheme="teal">
                Add Post
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
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