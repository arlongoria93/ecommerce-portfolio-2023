import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { ShopContext, ContextType } from "@/context/shop-context";

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
  console.log(customerDetails);
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
    </div>
  );
};

export default Success;
