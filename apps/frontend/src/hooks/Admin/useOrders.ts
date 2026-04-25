import { useEffect, useState } from "react";
const baseUrl = (import.meta as any).env.API_URL

export function useOrders() {
   const [orders, setOrders] = useState<any[]>([])
   const [filtered, setFiltered] = useState<any[]>([])
   const [statusFilter, setStatusFilter] = useState("")
   const[selectedOrder, setSelectedOrder] = useState<any>(null)

   const fetchOrders = async () => {
      const res = await fetch(`${baseUrl}/orders`, {
         headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
         }
      })

      const data = await res.json()
      const list = data.data ?? data

      setOrders(list)
      setFiltered(list)
   }

   useEffect(() => {
      fetchOrders()
   }, [])

   useEffect(() => {
      if (!statusFilter) {
         setFiltered(orders)
      } else {
         setFiltered(orders.filter((o) => o.status === statusFilter))
      }
   }, [statusFilter, orders])

   const updateStatus = async (id: number, status: string) => {
      await fetch(`${baseUrl}/orders/${id}/status`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
         body: JSON.stringify({ status })
      })

      fetchOrders()
   }

   return { orders: filtered, setStatusFilter, selectedOrder, setSelectedOrder, updateStatus }
}