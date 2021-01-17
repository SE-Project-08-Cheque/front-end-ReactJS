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
  AlertDialog,
  Stack,
  Checkbox,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Spinner,
  Tooltip,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import Alert from '../Alert';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EmailIcon,
  PhoneIcon,
  StarIcon,
} from '@chakra-ui/icons';

function Dashboard() {
  return (
    <>
      <Sidebar isDisabled="false" />

      <Box
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        boarderRadius="200px"
        mt={{ base: '530px', md: '130px' }}
        ml={{ base: '20px', md: '320px' }}
        h="500px"
        mr="20px"
      >
        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          p="10px"
        >
          <Center>
            <Image
              boxSize="150px"
              borderRadius="10px"
              ml="20px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <IconButton
              ml="15px"
              variant="outline"
              colorScheme="teal"
              aria-label="Send email"
              icon={<ArrowRightIcon />}
            />
            <Text pl="2px" color="gray.600" isTruncated>
              Name: C.P.Amarasena
            </Text>
            <br />
          </Center>
        </Box>

        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          h="70px"
          m="10px"
          borderRadius="10px"
        >
          <Tooltip label="Phone number" fontSize="md">
            <Text pl="2px" color="gray.700" isTruncated>
              <IconButton
                m="10px"
                colorScheme="green"
                aria-label="Call"
                icon={<PhoneIcon />}
              />
              +94715050200
            </Text>
          </Tooltip>
        </Box>

        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          h="70px"
          m="10px"
          borderRadius="10px"
        >
          <Tooltip label="E-Mail" fontSize="md">
            <Text pl="2px" color="gray.700" isTruncated>
              <IconButton
                m="10px"
                colorScheme="blue"
                aria-label="Send email"
                icon={<EmailIcon />}
              />
              chalindumalshika@gmail.com
            </Text>
          </Tooltip>
        </Box>

        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          h="70px"
          m="10px"
          borderRadius="10px"
        >
          <Tooltip label="Address" fontSize="md">
            <Text pl="2px" color="gray.700" isTruncated>
              <IconButton
                m="10px"
                colorScheme="red"
                aria-label="Send email"
                icon={<CheckCircleIcon />}
              />
              No: 96/C,Avissawella, Colombo
            </Text>
          </Tooltip>
        </Box>
        <Center>
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.300"
            color="blue.300"
            size="xl"
          />
        </Center>
      </Box>
    </>
  );
}

export default Dashboard;
