import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <div className="m-auto max-[calc(100%-2rem)] text-white text-xl">
      <Header  /> 
      <main className="w-full flex items-center justify-center py-56 gap-6">
        <h1>Product Page</h1>
        <p>Product ID: {productId}</p>
      </main>
      <Footer className="border-t border-lightbase"/>
    </div>
  )
}