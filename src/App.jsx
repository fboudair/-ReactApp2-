import { BrowserRouter as Router, Routes, Route } from "react-router-dom";   // Import React Router for routing between pages
// Importing all page components
import Navbar from "./Navbar";
import Home from "./pages/Home";
import SpongeSpicules from "./pages/SpongeSpicules";
import Store from "./pages/Store";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
// Importing context providers for global state
import { CartProvider } from "./contents/Cart";
import { AuthProvider } from "./contents/Auth";

function App() {
  return (
        // AuthProvider wraps the entire app to provide authentication context
    <AuthProvider>
            {/* CartProvider wraps the app to provide shopping cart context */}
      <CartProvider>
                {/* Router enables client-side routing */}
        <Router>
          <div className="flex flex-col min-h-screen">
                        {/* Navbar section: stays visible on all pages */}
            <div className="flex justify-between items-center px-6 py-4 shadow bg-white">
              <Navbar />
            </div>
            {/* Main content section: dynamic content based on route */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sponges" element={<SpongeSpicules />} />
                <Route path="/store" element={<Store />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
// Export the App component to be used in index.js
export default App;
