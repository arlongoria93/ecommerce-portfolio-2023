import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ShopContext, ContextType } from "@/context/shop-context";
import Link from "next/link";

type CustomerDetails = {
  name: string;
  email: string;
};
const Success = () => {
  const [customerDetails, setCustomerDetails] = useState({} as CustomerDetails);
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
      setCustomerDetails(data.customer_details);
      clearCart();
    }
  }, [data]);
  if (error) return <div>payment failed</div>;
  return (
    <div className="flex flex-col w-3/4 h-3/4 justify-center gap-4 ">
      <h1>
        Hello <span className="font-bold">{customerDetails.name}</span>,
      </h1>
      <p>
        Thank you for your recent purchase of a mechanical keyboard from our
        store! We are thrilled to have you as a customer and are confident that
        you will love your new keyboard.
      </p>
      <p>
        Your order confirmation has been sent to the email address provided
        <span className="font-bold "> {customerDetails.email}</span>. If you
        have any questions or concerns about your order, please don&apos;t
        hesitate to reach out to us at{" "}
        <span className="font-bold "> austinswitchsociety@hey.com</span>.
      </p>
      <p>
        We hope that your new mechanical keyboard meets all of your expectations
        and that you enjoy using it as much as we do. We appreciate your
        business and look forward to serving you again in the future.
      </p>
      <p>
        Best regards, <span className="font-bold">Austin Switch Society</span>
      </p>
      <Link href="/">
        <button className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500  transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4 text-black">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Success;
