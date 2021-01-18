import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Center,
  Button,
} from '@chakra-ui/react';
import MainSection from '../MainSection';
import Footer from '../Footer';


function Home() {
  return (
    <>
     <MainSection />
     <Footer base='100px'/>
    </>
  );
}

export default Home;
