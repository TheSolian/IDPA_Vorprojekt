import React from 'react'

interface TransactionProps {
  transaction: Transaction
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <div className='flex justify-between py-4 border-b last-of-type:border-b-0 px-8'>
      <div>
        <div className='text-xl font-bold'>Bonus</div>
        <div className='text-sm'>{transaction.createdAt.toLocaleString()}</div>
      </div>
      <div className='text-right'>
        <div>{transaction.bonus}</div>
        <div>
          <span>Verrechnungssteuer: -</span>
          <span>{transaction.tax}</span>
        </div>
      </div>
    </div>
  )
}

export default Transaction
