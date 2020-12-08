import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
