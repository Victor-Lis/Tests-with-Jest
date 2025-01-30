import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import { login } from "../../services/login";
import ButtonComponent from "../Button";

export default function SignIn() {
  return (
    <Center bg="#282828">
      <Box backgroundColor="#353535" borderRadius="5px" p={6} w="350px" boxShadow="lg">
        <Text fontSize="4xl" fontWeight="bold" textTransform="uppercase" color="white" textAlign="center" mb={4}>
          Faça o login
        </Text>
        <VStack spacing={2}>
          <Input placeholder="Email" size="md" focusBorderColor="teal.400" borderRadius={2} />
          <Input placeholder="Password" type="password" size="md" focusBorderColor="teal.400" borderRadius={2}/>
          <ButtonComponent login={login} />
        </VStack>
      </Box>
    </Center>
  );
}
