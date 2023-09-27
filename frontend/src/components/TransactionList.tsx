import React from 'react'
import Transaction from './Transaction'
import { ScrollArea } from './ui/scroll-area'

interface TransactionListProps {
  transactions: Transaction[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ScrollArea className='w-full border rounded-lg h-[600px] mt-12'>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <div className='text-center pt-16'>No Transactions</div>
      )}
    </ScrollArea>
  )
}

export default TransactionList
