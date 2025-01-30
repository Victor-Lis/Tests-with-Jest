import { Button, Center } from "@chakra-ui/react";

export default function ButtonComponent({login}:{login: () => void}) {
  return (
    <Center>
      <Button
        onClick={login}
        colorScheme="teal"
        size="md"
        width="100%"
        marginTop="15px"
        borderRadius={2}
      >
        Fazer Login
      </Button>
    </Center>
  );
}
