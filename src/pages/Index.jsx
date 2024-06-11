import { Box, Container, Flex, Heading, Link, Text, VStack, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const { colorMode } = useColorMode();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Box>
      <Box as="header" bg={colorMode === "light" ? "brand.800" : "gray.800"} color="white" py={4}>
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
              <Flex justify="space-between" align="center">
                <Heading fontSize="xl">{post.title}</Heading>
                <IconButton
                  aria-label="Delete post"
                  icon={<FaTrash />}
                  colorScheme="red"
                  onClick={() => handleDelete(index)}
                />
              </Flex>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </Container>

      <Box as="footer" bg={colorMode === "light" ? "gray.700" : "gray.900"} color="white" py={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;