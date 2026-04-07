import { useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'

export function LoginPage() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const navigate = useNavigate()

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')

      try {
         const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
         });

         const data = await response.json()

         if (!response.ok)
            throw new Error(data.message || 'Login not successful')

         localStorage.setItem('token', data.token)

         const isAdmin = data.user?.isAdmin;
         
         if(isAdmin) {
            navigate(routes.ADMIN)
         } else {
            navigate(routes.HOME)
         }
         window.location.reload()
      } catch (err: any) {
         setError(err.message)
      }
   }

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