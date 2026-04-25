import { useState } from 'react'
import styles from './RegisterPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../../routes/routes'
const baseUrl = (import.meta as any).env.API_URL

export function Register() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const [fullName, setFullName] = useState('')
   const navigate = useNavigate();

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setError('')

      if (password !== confirmPassword) {
         setError('Passwords dont match')
         return
      }

      setLoading(true)

      try {
         const response = await fetch(`${baseUrl}/auth/register`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, fullName})
         })

         const data = await response.json()

         if (!response.ok) {
            throw new Error(data.message || 'Registration not successful')
         }

         localStorage.setItem('token', data.data.token)

         navigate(routes.HOME)
         window.location.reload()
      } catch (err: any) {
         setError(err.message)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className={styles.container}>
         <h1 className={styles.title}>Register</h1>
         {error && <p>{error}</p>}

         <form onSubmit={handleSubmit} className={styles.form}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required className={styles.inputField}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className={styles.inputField}/>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat password" required className={styles.inputField}/>
            <input type="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" required className={styles.inputField}/>
            <button type="submit" disabled={loading} className={styles.button}> {loading ? 'Registration...' : 'Register'}</button>
         </form>
         <p className={styles.link}>Already have an account? <Link to={routes.LOGIN_PAGE}>Register here</Link></p>
      </div>
   )
}