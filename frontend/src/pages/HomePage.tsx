import CustomerList from '@/components/CustomerList'
import CustomerListItem from '@/components/CustomerListItem'
import React from 'react'

function HomePage() {
  return (
    <div>
      <CustomerList
        customers={[
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
          {
            balance: 12,
            name: 'Elvis',
            birthday: new Date('2005-09-09'),
            id: 'frfr',
          },
          {
            balance: 43553,
            name: 'Jan',
            birthday: new Date('2005-08-23'),
            id: 'frfr',
          },
        ]}
      />
    </div>
  )
}

export default HomePage
