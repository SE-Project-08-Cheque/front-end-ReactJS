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
  Flex,
  Image,
} from '@chakra-ui/react';
import './MainSection.css';
import { MdAddShoppingCart, MdBuild, MdCall, MdSend } from 'react-icons/md';
import Card from './Card';

function WelcomePage() {
  return (
    <>
      <div className="main-section">
        <Box pt="150px" h="300px">
          <Center>
            <Text pl="20px" fontSize="6xl" color="white">
              Welcome To Online Cheque!
            </Text>
          </Center>
          <Center>
          <Text pl="20px" fontSize="4xl" color="white" textAlign={'center'}>
            Online Check is perfect for self-employed people<br/>
            saving them tons of valuable time.<br/>
            The only software which allows the user to create Single or Multiple checks<br/>
            and giving functionality to a self-employed user at no extra cost.<br/>
          </Text>
          </Center>
          <Center>
            <Text pl="20px" fontSize="5xl" color="white" textAlign={'center'}>
              Register Today And Make Your Transactions A Boost
            </Text>
          </Center>
        </Box>
      </div>
    </>
  );
}

export default WelcomePage;
