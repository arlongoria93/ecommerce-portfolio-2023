import React, { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ShopContext, ContextType } from "@/context/shop-context";

const success = () => {
  const { clearCart } = React.useContext(ShopContext) as ContextType;
  const {
    query: { session_id },
  } = useRouter();

  const fetcher = (url: any) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      //clear cart
      clearCart();
    }
  }, [data]);
  if (error) return <div>payment failed</div>;

  return (
    <div>
      <h1>Success</h1>
    </div>
  );
};

export default success;
