import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));
    navigate("/");
  };

  return (
    <Box>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              Add New Post
            </Heading>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl id="title" mb={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </FormControl>
          <FormControl id="content" mb={4}>
            <FormLabel>Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Post
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AddPost;