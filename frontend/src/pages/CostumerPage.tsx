import BonusButton from '@/components/BonusButton'
import Transaction from '@/components/Transaction'
import TransactionList from '@/components/TransactionList'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { db } from '@/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CostumerPage() {
  const [customer, setCustomer] = useState<Customer>()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const { id } = useParams()

  async function fetchCustomer() {
    if (!id) return

    const userRef = doc(collection(db, 'customers'), id)
    const snapshot = await getDoc(userRef)
    const data = snapshot.data() as Omit<Omit<Customer, 'id'>, 'birthday'>
    const birthday = snapshot.get('birthday').toDate() // Convert the birthday field to a Date

    const customerData: Customer = {
      id,
      ...data,
      birthday,
    }
    console.log(customerData)
    setCustomer(customerData)
  }

  async function fetchTransactions() {
    if (!id) return

    const transactionRef = collection(doc(db, 'customers', id), 'transactions')
    const snapshot = await getDocs(transactionRef)
    const data: Transaction[] = snapshot.docs.map((doc) => {
      const docData = doc.data() as Omit<Omit<Transaction, 'id'>, 'createdAt'>
      const createdAt = doc.data().createdAt.toDate()
      return {
        id: doc.id,
        ...docData,
        createdAt,
      }
    })
    setTransactions(data)
  }

  function update() {
    fetchCustomer()
    fetchTransactions()

    return Promise.all([fetchCustomer(), fetchTransactions()])
  }

  useEffect(() => {
    fetchCustomer()
    fetchTransactions()
  }, [])

  return (
    <>
      {customer ? (
        <div className='px-96'>
          <div>
            <div className='flex justify-between items-center my-12'>
              <Link to={'/'}>
                <Button size={'icon'} variant={'ghost'}>
                  <Icons.arrowLeft />
                </Button>
              </Link>
              <div className='text-6xl'>{customer.name}</div>
              <BonusButton customer={customer} update={update} />
            </div>
            <Separator />
          </div>
          <div>
            <div className='flex justify-between items-center my-12'>
              <div className='text-xl'>
                <span className='font-bold'>Birthday: </span>
                <span>{customer.birthday.toLocaleDateString()}</span>
              </div>
              <div className='text-xl'>
                <span className='font-bold'>CHF </span>
                <span>{customer.balance}</span>
              </div>
            </div>
            <Separator />
          </div>
          <TransactionList transactions={transactions} />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default CostumerPage
