import { db } from '@/firebase'
import { DialogClose } from '@radix-ui/react-dialog'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import CustomerListItem from './CustomerListItem'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'

interface CustomerListProps {}

const CustomerList: React.FC<CustomerListProps> = () => {
  const [customers, setCustomers] = useState<Customer[]>([])
  const nameIntput = useRef<HTMLInputElement>(null)
  const dateInput = useRef<HTMLInputElement>(null)

  async function handleSubmit() {
    if (!nameIntput.current || !dateInput.current) return

    const customer = {
      name: nameIntput.current?.value,
      birthday: new Date(dateInput.current.value),
      balance: 0,
    }

    await addDoc(collection(db, 'customers'), customer)

    fetchCustomers()
  }

  async function fetchCustomers() {
    const customerRef = collection(db, 'customers')
    const snapshot = await getDocs(customerRef)
    const data: Customer[] = snapshot.docs.map((doc) => {
      const docData = doc.data() as Omit<Omit<Customer, 'id'>, 'birthday'>
      const birthday = doc.data().birthday.toDate()

      return {
        id: doc.id,
        ...docData,
        birthday,
      }
    })
    setCustomers(data)
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  return (
    <div className='flex flex-col w-1/2 items-center gap-4'>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='self-end'>Add Customer</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Customer</DialogTitle>
          </DialogHeader>
          <div className='grid gap-8 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-left'>
                Name
              </Label>
              <Input
                ref={nameIntput}
                id='name'
                className='col-span-4'
                required
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='birthday' className='text-left'>
                Birthday
              </Label>
              <Input
                ref={dateInput}
                id='birthday'
                type='date'
                className='col-span-4'
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSubmit}>Create</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ScrollArea className='w-full mx-auto border rounded-lg h-[600px]'>
        {customers.map((customer) => (
          <CustomerListItem key={customer.id} customer={customer} />
        ))}
      </ScrollArea>
    </div>
  )
}

export default CustomerList
