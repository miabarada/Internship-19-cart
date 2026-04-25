import { useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { getUser } from '../../utils/getUser'
const baseUrl = (import.meta as any).env.API_URL

export function LoginPage() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const navigate = useNavigate()

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')

      try {
         const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
         });

         const data = await response.json()

         if (!response.ok)
            throw new Error(data.message || 'Login not successful')

         localStorage.setItem('token', data.data.token)
         localStorage.setItem('user', JSON.stringify(data.data.user))

         const user = getUser()
         
         if(user?.isAdmin) {
            navigate(`/${routes.ADMIN_HOME}`)
         } else {
            navigate(routes.HOME)
         }
      } catch (err: any) {
         setError(err.message)
      }
   }

   console.log({
      email,
      password
   })

   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Login</h1>
         {error && <p>{error}</p>}
         <form onSubmit={handleSubmit} className={styles.form}>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.inputField}/>
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required  className={styles.inputField} />
            <button type='submit' className={styles.button}>Login</button>
         </form>
         <p>Don't have an account? <Link to={routes.REGISTER_PAGE}>Register here</Link></p>
      </div>
   )
}