import { useUser } from '../../hooks/useUser'
import styles from './ProfilePage.module.scss'
import { Navbar } from '../../components/Navbar/Navbar'
import { LoadingPage } from '../LoadingPage/LoadingPage'
import { useUpdateUser } from '../../hooks/useUpdateUSer'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'

export function ProfilePage() {
   const { user, loading } = useUser()
   const { updateUser } = useUpdateUser()
   const { logout } = useAuth()

   const [edit, setEdit] = useState(false)
   
   const [profile, setProfile] = useState<any>({
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
      county: '',
      iban: '',
      expiryDate: ''
   })

   if (!loading) {
      return <LoadingPage />
   }

   if (!user) {
      return <div>Greška pri učitavanju profila</div>
   }

   if (!profile.fullName && user) {
      setProfile(user)
   }

   const handleChange = (field: string, value: string) => {
      setProfile((prev: any) => ({
         ...prev,
         [field]: value
      }))
   }

   const handleSave = async () => {
      await updateUser(profile)
      setEdit(false)
   }

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <h1>Profil</h1>
            <div className={styles.buttons}>
               <button
                  className={styles.changes}
                  onClick={() => {
                     if (edit) handleSave()
                     setEdit(!edit)
                  }}
               >
                  {edit ? 'SPREMI' : 'UREDI'}
               </button>
               <button
                  className={styles.changes}
                  onClick={logout}
               >
                  ODJAVA
               </button>
            </div>
         </div>
         
         {!edit ? (
            <div className={styles.section}>
               <p>IME: {user.fullName || 'Ime nije uneseno'}</p>
               <p>ADRESA: {user.address || 'Adresa nije unesena'}, {user.city || 'grad nije unesen'}</p>
               <p>ŽUPANIJA: {user.county || 'Županija nije unesena'}, {user.zipCode || ''} {user.country || 'Država nije unesena'}</p>
               <p>IBAN: {user.iban || 'IBAN nije unesen'}</p>
               <p>DATUM ISTEKA: {user.expiryDate || 'Datum isteka nije unesen'}</p>
               <p>ISCT KOD: {user.isctCode || 'ISCT kod nije unesen'}</p>
           </div>
         ) : (
            <div className={styles.form}>
               <input
                  value={profile.fullName || ''}
                  placeholder='Ime'
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className={styles.input}
               />
               <div className={styles.row}>
                  <input
                     value={profile.address || ''}
                     placeholder='Adresa'
                     onChange={(e) => handleChange('address', e.target.value)}
                     className={styles.input}
                  />
                  <input
                     value={profile.city || ''}
                     placeholder='Grad'
                     onChange={(e) => handleChange('city', e.target.value)}
                     className={styles.input}
                  />
               </div>
               <div className={styles.row}>
                  <input
                     value={profile.county || ''}
                     placeholder='Županija'
                     onChange={(e) => handleChange('county', e.target.value)}
                     className={styles.input}
                  />
                  <input
                     value={profile.zipCode || ''}
                     placeholder='Poštanski broj'
                     onChange={(e) => handleChange('zipCode', e.target.value)}
                     className={styles.input}
                  />
               </div>
               <input
                     value={profile.country || ''}
                     placeholder='Država'
                     onChange={(e) => handleChange('country', e.target.value)}
                     className={styles.input}
                  />
               <input
                  value={profile.iban || ''}
                  placeholder='IBAN'
                  onChange={(e) => handleChange('iban', e.target.value)}
                  className={styles.input}
               />
               <input
                  value={profile.expiryDate || ''}
                  placeholder='Datum isteka'
                  onChange={(e) => handleChange('expiryDate', e.target.value)}
                  className={styles.input}
               />
               <input
                  value={profile.isctCode || ''}
                  placeholder='ISCT kod'
                  onChange={(e) => handleChange('isctCode', e.target.value)}
                  className={styles.input}
               />
            </div>
            
         )}         
      </div>
   )
}