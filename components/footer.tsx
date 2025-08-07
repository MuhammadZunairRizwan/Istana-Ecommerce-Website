export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">Istana Jewellers</h3>
            <p className="text-stone-300 leading-relaxed">
              Exclusive and one-of-a-kind jewelry collection crafted with precision and passion.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Collections</h4>
            <ul className="space-y-2 text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Diamonds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gold Chains</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bracelets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Earrings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2 text-stone-300">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-stone-300 mb-4">Subscribe for exclusive offers and new arrivals</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:border-orange-500"
              />
              {/* <button className="bg-orange-500 px-6 py-2 hover:bg-orange-600 transition-colors">
                Subscribe
              </button> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p>&copy; 2024 Istana Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
