import React from 'react';
import {Box,Center,Text} from '@chakra-ui/react'
import NewRequstsList from '../NewRegisterRequestComp/NRL';
import SHeader from '../StaffHeader';
import SideBar from '../StaffsideBar';

const Users = () => {
  const joinReq = [     // sample data
    {
      id: 'guest1',
      name: 'David Billa',
      mail:"thimplitheru",
      
    },
    {
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      },
      {
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
        
      },
      {
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      },{
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      },
      {
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      },
      {
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      },{
        id: 'guest1',
        name: 'David Billa',
        mail:"thimplitheru",
       
      }
  ];

  return(

    <React.Fragment>

        <SHeader/>
        <SideBar/>


        <Box mt="150px" ml="80px" mr="50px" padding="0">
            <Center>
            <Text fontSize="2rem" >NEW JOINS</Text>
            
            </Center>
            <NewRequstsList items={joinReq} />
      
       </Box>
       
    </React.Fragment>)
};

export default Users;
