import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Page {productId}</h1>
    </div>
  )
}