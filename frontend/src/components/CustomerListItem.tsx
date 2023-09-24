import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from './icons'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface CustomerListItemProps {
  customer: Customer
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({ customer }) => {
  return (
    <>
      <div className='flex flex-row py-4 border-b last-of-type:border-b-0'>
        <div className='flex items-center text-xl mx-6'>{customer.name}</div>
        <div className=' flex flex-col gap-3 mx-6'>
          <p>CHF {customer.balance}</p>
          <p>{customer.birthday.toLocaleDateString()}</p>
        </div>
        <div className=' ml-auto flex items-center gap-3 mx-6'>
          <Button variant={'ghost'}>Grant Bonus</Button>
          <Link to={`/customer/${customer.id}`}>
            <Button variant={'ghost'}>
              <Icons.eye />
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CustomerListItem
