import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user.email;
    const address = form.address.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      customerName: name,
      email,
      address,
      title,
      img,
      price,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            Swal.fire({
                icon: 'success',
                title: 'Order Confirmed',
                text: 'Your order has been successfully placed.',
              })
        }
      });
  };

  return (
    
    <div>
      <h2 className="text-center mt-20 text-orange-500 text-5xl font-semibold">
        Checkout
      </h2>
      {/* Service & price */}
      <div className="text-center mt-5">
        <p className="text-lg font-semibold">Service: {title}</p>
        <p className="text-lg font-semibold">Price: ${price}</p>
      </div>
      {/* Form */}
      <form onSubmit={handleCheckout} className="bg-gray-200 rounded-lg my-10">
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-white px-3 py-4 rounded-lg"
            required
            defaultValue={user?.displayName}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="bg-white px-3 py-4 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="bg-white px-3 py-4 rounded-lg"
            required
            defaultValue={user?.phoneNumber}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-white px-3 py-4 rounded-lg"
            required
            defaultValue={user?.email}
          />
          <textarea
            name="message"
            defaultValue={"Your Message"}
            cols="30"
            rows="10"
            className="bg-white text-gray-400 px-3 py-4 rounded-lg col-span-1 md:col-span-2"
          ></textarea>
          <input
            type="submit"
            value="Confirm Order"
            className=" text-white text-xl font-semibold bg-orange-600 px-3 py-4 rounded-lg cols-span-1 md:col-span-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
