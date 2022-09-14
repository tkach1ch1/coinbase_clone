import { CryptoPricesTitle } from "./CryptoPricesTitle"
import { TableFilterCategories } from "./TableFilterCategories"

export const CryptoPricesContainer = () => {
  return (
    <main>
        <div className="px-8 pt-8">
       <CryptoPricesTitle />
       <TableFilterCategories />
       </div>

    </main>
  )
}
