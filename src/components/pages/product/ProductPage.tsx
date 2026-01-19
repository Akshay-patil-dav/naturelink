
import { ProductGrid } from './ProductGrid.tsx'
// import Medicineheader from '../../medicineheader.tsx'
import { PageHeader } from './PageHeader.tsx'

export default function ProductPage() {
  return (
    <>
             <PageHeader title={'Product Page '} subtitle={'Buy product now '} />
       <ProductGrid />
    </>
  )
}
