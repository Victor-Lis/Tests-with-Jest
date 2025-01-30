import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box bg="#353535" px={6} py={4} boxShadow="md">
      <Flex justify="flex-start" align="center" mx="auto">
        <img 
          alt="logo" 
          src="https://assets.dio.me/v9JIXjCU2MaUsLu8HKA-9qRgqmD8zPq67zs_CfpEEB0/f:webp/h:77/q:80/w:77/L2xhYl9wcm9qZWN0cy9iYWRnZXMvZjNlNDBjYmEtZmRkNy00Y2QxLWFhZjItYzFlM2UyNzE3ODkwLnBuZw"
          style={{ height: "40px" }}
        />
        <Text fontSize="xl" fontWeight="bold" color="white">
          Dio Bank
        </Text>
      </Flex>
    </Box>
  );
}