import { db } from '@/firebase'
import { calculateBonus, roundNumber } from '@/lib/utils'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { Button } from './ui/button'

interface BonusButtonProps {
  variant?: 'ghost' | 'default'
  customer: Customer
  update?: () => Promise<[void, void]>
}

const BonusButton: React.FC<BonusButtonProps> = ({
  variant,
  customer,
  update,
}) => {
  const [isLoading, setIsLoading] = React.useState(false)

  async function handleClick() {
    const date = customer.birthday.getDate()

    const result = calculateBonus(
      customer.balance,
      date === 31 ? 30 : date,
      0.35
    )

    const bonus = result * 0.65
    const tax = result * 0.35

    updateDoc(doc(collection(db, 'customers'), customer.id), {
      balance: roundNumber(customer.balance + bonus),
    })

    addDoc(collection(doc(db, 'customers', customer.id), 'transactions'), {
      bonus: roundNumber(bonus),
      tax: roundNumber(tax),
      createdAt: new Date(Date.now()),
    } as Omit<Transaction, 'id'>)

    if (update) {
      setIsLoading(true)
      update().then(() => {
        setIsLoading(false)
      })
    }
  }

  return (
    <Button variant={variant} onClick={handleClick} disabled={isLoading}>
      Grant Bonus
    </Button>
  )
}

export default BonusButton
