import { Box, ChakraProvider } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { Header } from "../Header";

import styles from './styles.module.css'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      <Box background="#282828" minHeight="100svh" paddingX="2%" width="100%" display="flex" justifyContent="flex-start" flexDirection="column" rowGap={20}>
        <Header />
        {children}
        {/* <Footer /> */}
      </Box>
    </ChakraProvider>
  );
};
