import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price } = service;
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
      <form className="bg-gray-200 rounded-lg my-10">
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="bg-white px-3 py-4 rounded-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="last Name"
            className="bg-white px-3 py-4 rounded-lg"
          />
          <input
            type="number"
            name="phone"
            placeholder="Your Phone"
            className="bg-white px-3 py-4 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-white px-3 py-4 rounded-lg"
            required
          />
          <textarea
            name="message"
            defaultValue={"Your Message"}
            cols="30"
            rows="10"
            className="text-gray-400 px-3 py-4 rounded-lg col-span-1 md:col-span-2"
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
