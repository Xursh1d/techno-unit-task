import { Box, Container, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}
const sidebar = {
  w: "100%",
  h: "44px",
  display: "flex",
  alignItems: "center",
  border: "1px",
  borderColor: 'gray.200',
  borderRadius: "10px",
  p: "0 10px",
  m: "10px 0"
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Container maxW="6xl" p={5} >
      <Box {...sidebar}>
        <Navbar />
      </Box>
      <Box w="100%">
        {children}
      </Box>
    </Container>
  )
}
