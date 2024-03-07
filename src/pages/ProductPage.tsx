import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <div className="m-auto max-[calc(100%-2rem)] text-white text-xl">
      <Header  /> 
      <main className="w-full flex items-center justify-center pb-56 pt-64 gap-6">
        <div className="justify-between max-w-5xl px-10 flex w-full items-center">
          <h1>Product Page</h1>
          <p>Product ID: {productId}</p>
        </div>
      </main>
      <Footer className="border-t border-lightbase"/>
    </div>
  )
}