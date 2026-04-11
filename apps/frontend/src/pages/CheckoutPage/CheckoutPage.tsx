import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { useCheckout } from '../../hooks/useCheckout'
import styles from './CheckoutPage.module.scss'
import { useState } from 'react'
import { isValidAddress } from '../../utils/isValisAddress'
import { routes } from '../../routes/routes'
import { Navbar } from '../../components/Navbar/Navbar'
import { LoadingPage } from '../LoadingPage/LoadingPage'

export function CheckoutPage() {
   const { cart, loading } = useCart()
   const { checkoutOrder } = useCheckout()
   const navigate = useNavigate()

   const orderId = cart?.id
   const items = cart?.items || []

   const [shiping, setShiping] = useState<Address>({
      name: '',
      address: '',
      city: '',
      zip: '',
      country: ''
   })

   const [billing, setBilling] = useState<Address>({
      name: '',
      address: '',
      city: '',
      zip: '',
      country: ''
   })

   const [editShipping, setEditShipping] = useState(false)
   const [editBilling, setEditBilling] = useState(false)

   if (!loading) {
      return <LoadingPage />
   }

   const handleChange = (
      type: 'shipping' | 'billing',
      field: keyof Address,
      value: string
   ) => {
      if (type === 'shipping') {
         setShiping(prev => ({ ...prev, [field]: value}))
      } else {
         setBilling(prev => ({ ...prev, [field]: value }))
      }
   }

   const isValid = isValidAddress(shiping) && isValidAddress(billing)

   const handleCheckout = async () => {
      if (!orderId) {
         alert("Košarica nije učitana")
         return
      }

      if (!isValid) {
         alert("Unesi sve podatke")
         return
      }

      const payload = {
         shippingName: shiping.name,
         shippingAddress: shiping.address,
         shippingCity: shiping.city,
         shippingZip: shiping.zip,

         billingName: billing.name,
         billingAddress: billing.address,
         billingCity: billing.city,
         billingZip: billing.zip,
      }

      const res = await checkoutOrder(orderId, payload)

      console.log("CHECKOUT RESPONSE:", res)

      navigate(routes.SUCCESS_PAGE)
   }

   const total = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity, 0
   )

   return (
      <div className={styles.container}>
         <h1>Blagajna</h1>

         <div className={styles.section}>
            <div className={styles.sectionHeader}>
               <h2>ADRESA DOSTAVE</h2>
               <button onClick={() => setEditShipping(!editShipping)} className={styles.changes}>
                  {editShipping ? 'PROMIJENI' : 'POHRANI'}
               </button>
            </div>

            {editShipping ? (
               <div className={styles.view}>
                  <p>{shiping.name || 'Ime nije uneseno'}</p>
                  <p>{shiping.address || 'Adresa nije unesena'}, {shiping.city || 'grad nije unesen'}</p>
                  <p>{shiping.zip || 'Poštanski broj nije unesen'} {shiping.country || ', država nije unesena'}</p>
               </div>
            ) : (
               <div className={styles.form}>
                  <input
                     placeholder='Ime'
                     value={shiping.name}
                     onChange={(e) => handleChange('shipping', 'name', e.target.value)}
                     className={styles.input}
                  />
                  <div className={styles.inputRow}>
                     <input
                        placeholder='Adresa'
                        value={shiping.address}
                        onChange={(e) => handleChange('shipping', 'address', e.target.value)}
                        className={styles.input}
                     />
                     <input
                        placeholder='Grad'
                        value={shiping.city}
                        onChange={(e) => handleChange('shipping', 'city', e.target.value)}
                        className={styles.input}
                     />
                  </div>
                  <div className={styles.inputRow}>
                     <input
                        placeholder='Poštanski broj'
                        value={shiping.zip}
                        onChange={(e) => handleChange('shipping', 'zip', e.target.value)}
                        className={styles.input}
                     />
                     <input
                        placeholder='Država'
                        value={shiping.country}
                        onChange={(e) => handleChange('shipping', 'country', e.target.value)}
                        className={styles.input}
                     />
                  </div>
               </div>
            )}
         </div>

         <div className={styles.section}>
            <div className={styles.sectionHeader}>
               <h2>ADRESA NAPLATE</h2>
               <button onClick={() => setEditBilling(!editBilling)} className={styles.changes}>
                  {editBilling ? 'PROMIJENI' : 'POHRANI'}
               </button>
            </div>

            {editBilling ? (
               <div className={styles.view}>
                  <p>{billing.name || 'Ime nije uneseno'}</p>
                  <p>{billing.address || 'Adresa nije unesena'}, {billing.city || 'grad nije unesen'}</p>
                  <p>{billing.zip || 'Poštanski broj nije unesen'} {billing.country || ', država nije unesena'}</p>
               </div>
            ) : (
               <div className={styles.form}>
                  <input
                     placeholder='Ime'
                     value={billing.name}
                     onChange={(e) => handleChange('billing', 'name', e.target.value)}
                     className={styles.input}
                  />
                  <div className={styles.inputRow}>
                     <input
                        placeholder='Adresa'
                        value={billing.address}
                        onChange={(e) => handleChange('billing', 'address', e.target.value)}
                        className={styles.input}
                     />
                     <input
                        placeholder='Grad'
                        value={billing.city}
                        onChange={(e) => handleChange('billing', 'city', e.target.value)}
                        className={styles.input}
                     />
                  </div>
                  <div className={styles.inputRow}>
                     <input
                        placeholder='Poštanski broj'
                        value={billing.zip}
                        onChange={(e) => handleChange('billing', 'zip', e.target.value)}
                        className={styles.input}
                     />
                     <input
                        placeholder='Država'
                        value={billing.country}
                        onChange={(e) => handleChange('billing', 'country', e.target.value)}
                        className={styles.input}
                     />
                  </div>
               </div>
            )}
         </div>
         <button
            className={styles.button}
            disabled={!isValid}
            onClick={handleCheckout}
         >
            POTVRDI NARUDŽBU
         </button>

         <Navbar />
      </div>
   )
}