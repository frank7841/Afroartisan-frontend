import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'African Wooden Sculpture',
    description: 'Handcrafted wooden sculpture from Ghana',
    price: 199.99,
    image: '/products/sculpture1.jpg',
    category: 'Sculptures'
  },
  {
    id: '2',
    name: 'Organic Shea Butter',
    description: '100% Pure Ghanaian shea butter',
    price: 29.99,
    image: '/products/sheabutter1.jpg',
    category: 'Skincare'
  },
  {
    id: '3',
    name: 'African Textile Art',
    description: 'Handwoven textile art from Mali',
    price: 149.99,
    image: '/products/textile1.jpg',
    category: 'Textiles'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Welcome to AfroArtisan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
