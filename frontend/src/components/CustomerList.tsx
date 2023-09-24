import React from 'react'
import CustomerListItem from './CustomerListItem'
import { Card } from './ui/card'
import { ScrollArea } from './ui/scroll-area'

interface CustomerListProps {
  customers: Customer[]
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <>
      <ScrollArea className=' w-1/2 mx-auto border rounded-lg h-[600px]'>
        {customers.map((customer) => (
          <CustomerListItem key={customer.id} customer={customer} />
        ))}
      </ScrollArea>
    </>
  )
}

export default CustomerList
