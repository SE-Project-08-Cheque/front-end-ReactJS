import React from 'react';
import { Flex, Box,Heading,Button, ReactRouterLink,Center,Menu,MenuItem,MenuGroup,MenuDivider,MenuButton,MenuList,Avatar} from '@chakra-ui/react';
import { HamburgerIcon, EditIcon,LockIcon,ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


function Navbar(props) {
  const MenuItems = ({ children }) => (
    <Button
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      colorScheme="teal.500"
      variant="link"
    >
      {children}
    </Button>
  );

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  



  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.6rem"
      bg="#EDF2F7"
      color="white"
     
      bottom="0"
      width="100%"
      height="55px"
      zIndex="10000"
     
      borderRadius="5px"
      borderBottomColor="#3182CE"
      borderBottomWidth="5px"

      borderTopColor="#3182CE"
      borderTopWidth="2px"

      borderRightColor="#171923"
      borderRightWidth="2px"

      borderLeftColor="#171923"
      borderLeftWidth="2px"
      
    > <Heading marginLeft="200px" as="h1" textColor ="#3182CE" size="sm" letterSpacing={'-.1rem'}>
    Online Cheque SE Group 8
    </Heading> 
    
    </Flex>
  );
}

export default Navbar;
