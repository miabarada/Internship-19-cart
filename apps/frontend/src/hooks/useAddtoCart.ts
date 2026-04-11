export function useAddToCart() {
   const addToCart = async (data: {
      productId: number, 
      size: string,
      color: string,
      quantity: number
   }) => {
      try {
         await fetch("http://localhost:3000/orders", {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${localStorage.getItem("token")}`,
            }, 
            body: JSON.stringify(data)
         })
      } catch (err) {
         console.error(err)
      }
   }

   return { addToCart }
}