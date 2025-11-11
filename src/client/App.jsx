import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { useCart } from "./hooks/useCart";
import ProductDetail from "./pages/ProductDetail";
import CartSidebar from "./components/CartSidebar/CartSidebar";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, total, itemCount, getItemQuantity } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Index
                onAddToCart={handleAddToCart}
                onOpenCart={() => setIsCartOpen(true)}
                cartItemCount={itemCount}
                getItemQuantity={getItemQuantity}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                onAddToCart={handleAddToCart}
                onOpenCart={() => setIsCartOpen(true)}
                cartItemCount={itemCount}
                getItemQuantity={getItemQuantity}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={() => {
          alert("Thank you for your purchase!");
          setIsCartOpen(false);
        }}
      />
    </>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
