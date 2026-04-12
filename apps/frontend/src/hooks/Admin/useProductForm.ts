import { useEffect, useState } from "react"

const initialState = {
   name: "",
   description: "",
   price: "",
   brand: "",
   categoryId: "",
   sizes: "",
   colors: "",
   inStock: true,
}

export function useProductForm(selected: any, onSuccess: () => void) {
   const [form, setForm] = useState(initialState)

   useEffect(() => {
      if (selected) {
         setForm({
            name: selected.name || "",
            description: selected.description || "",
            price: String(selected.price || ""),
            brand: selected.brand || "",
            categoryId: String(selected.categoryId || ""),
            sizes: (selected.sizes || []).join(","),
            colors: (selected.colors || []).join(","),
            inStock: selected.inStock ?? true,
         })
      } else {
         setForm(initialState)
      }
   }, [selected])

   const handleChange = (key: string, value: any) => {
      setForm((prev) => ({ ...prev, [key]: value}))
   }

   const submit = async () => {
      const payload = {
         name: form.name,
         description: form.description,
         price: Number(form.price),
         brand: form.brand || "",
         images: [],
         sizes: form.sizes
            ? form.sizes.split(",").map((s) => s.trim())
            : [],
         colors: form.colors
            ? form.colors.split(",").map((c) => c.trim())
            : [],
         inStock: form.inStock,
         categoryId: Number(form.categoryId),
      }

      const token = localStorage.getItem('token')
      const isEdit = !!selected

      await fetch(
         isEdit
            ? `$http://localhost:3000/products/${selected.id}`
            : 'http://localhost:3000/products',
         {
            method: isEdit ? "PUT" : "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
         }
      );

      setForm(initialState)
      onSuccess()
   }

   return { form, handleChange, submit }
}