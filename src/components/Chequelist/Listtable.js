import React, {useMemo} from 'react'
import {useTable, useSortBy, useGlobalFilter, usePagination} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {format} from 'date-fns';
// import {COLUMNS} from './columns'
// import { MdBuild , MdCall } from "react-icons/md"
import './table.css'
import { GlobalFilter } from '../Cheq/GlobalFilter'
import {
    Text,
    Button,
    Modal,
    PhoneIcon,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

export const Listtable = (props)=>{
    // const { isOpen, onOpen, onClose } = useDisclosure()
    
    const COLUMNS =[
        {
            Header:'Id',
            Footer:'Id',
            accessor:'id'
        },
        {
            Header:'Name',
            Footer:'Name',
            accessor:'name'
        },
        {
            Footer:'issued_date',
            Header:'Issued Date',
            accessor:'issued_date',
            cell:({value})=>{return format(new Date(value),'D-MMM/YYYY')}
        },
        {
            Header:'Amount',
            Footer:'Amount',
            accessor:'amount',
            cell : <button>jj</button>,
            getProps: () => ({ someFunc: () => alert("clicked")})
        },
        {
            Header:'Status',
            Footer:'Status',
            accessor:'Status',
            cell:'ssssssss'
            // cell:<IconButton aria-label="Search database" icon={<SearchIcon />} />
        },
    ]
    const columns=useMemo(()=> COLUMNS,[])
    const data=useMemo(()=> MOCK_DATA,[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // footerGroups,
        // rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
        prepareRow,
        // state,
        setGlobalFilter,
      } = useTable({ columns, data },useGlobalFilter,useSortBy,usePagination)
    
      const {globalFilter,pageIndex,pageSize} =state
    //   const {pageIndex} = state

      return (
          <>
          {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    { column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? '<' :'>'):''}</span>
                  </th>
                ))}
                <th>button</th>
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            page.map((row) => {prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {
                  row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>
                        {
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                  {/* {console.log(row.original.name)} */}
                  <td>
                      
      <Button onClick={(event)=>{props.change(event,row.original)}}>{}</Button>
      {/* <Button onClick={onOpen}>{}</Button> */}
      <Modal blockScrollOnMount={false} isOpen={props.open} onClose={props.close}>
        <ModalContent>
          <ModalHeader>{props.modal.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">{props.modal.amount}
              You can scroll the content behind the modal
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.close}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </td>
                </tr>
              )
            })}
            </tbody>
        </table>
        <div style={{margin:"auto", textAlign:"center"}}>
            <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>{[10,20,30].map(pageSize=>(
                <option key={pageSize} value={pageSize}>Show {pageSize}</option>
            ))}</select>
            <span>Page{' '}<strong>{pageIndex+1} of {pageOptions.length}</strong>{' '}</span>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>&lt;&lt;Previous</button>
            <button icon={<PhoneIcon />} onClick={()=>nextPage()} disabled={!canNextPage}>Next&gt;&gt;</button>
        </div>
        </>
    )
}
// export default Listtable;


