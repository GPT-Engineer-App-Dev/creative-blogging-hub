import { Route, BrowserRouter as Router, Routes, Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Link, Button } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import ColorModeSwitcher from "./components/ColorModeSwitcher";

function App() {
  return (
    <Router>
      <header>
        <Flex justify="space-between" align="center" bg="blue.500" p={4}>
          <Heading as="h1" size="lg" color="white">
            My Personal Blog
          </Heading>
          <ColorModeSwitcher />
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
      </header>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;