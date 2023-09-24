import { auth } from '@/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

interface LoginProps {}

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email adress' }),
  password: z.string(),
})

const Login: React.FC<LoginProps> = ({}) => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/')
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
        navigate('/login')
      }
    })
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      toast.error("Couldn't login")
    }
  }

  return (
    <Card className='w-1/3'>
      <CardHeader>
        <CardTitle className='text-3xl'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='self-end'>Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Login
