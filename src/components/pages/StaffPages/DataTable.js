import React ,{useState}from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";


const DataTable = ({data}) => {
    const columns = data[0] && Object.keys(data[0]);

    const [rowValue, setrowValue] = useState([""]);

    const onClickHandler=(rowValue)=>{
        console.log(rowValue)
        
    }
    return (
       
        <Table variant="striped" colorScheme="gray">
            <hr/>
        
            <Thead>
                <Tr>{data[0] && columns.map((heading)=><Th>{heading}</Th>)}</Tr>
            </Thead>


            <Tbody> 

                {data.map(row => 
                <React.Fragment>

                  
                    
                <Tr>
                    {
                        columns.map(column =>(<Td>{row[column]}</Td>))
                    }
                    
                    <Td> <button onClick={onClickHandler}> Click</button></Td>
                </Tr>
                </React.Fragment>

                )}
                 
            </Tbody>

         </Table> 
    )
}

export default DataTable
