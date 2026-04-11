export function isValidAddress (a: Address) {
   return !!(a.name && a.address && a.city && a.zip && a.country)
}