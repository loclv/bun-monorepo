import { db } from './src/db'
import { products } from './src/db/schema/products'

await db.insert(products).values([
  {
    id: 1,
    name: 'Product A',
    description: 'A description',
    price: 11,
  },
  {
    id: 2,
    name: 'Product B',
    description: 'B description',
    price: 11,
  },
  {
    id: 3,
    name: 'Product C',
    description: 'C description',
    price: 11,
  },
])

console.log('Seeding complete. 🌟')

// DONE
process.exit(0)
