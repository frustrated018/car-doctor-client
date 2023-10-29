const Checkout = () => {
  return (
    <div>
      <h2 className="text-center mt-20 text-orange-500 text-5xl font-semibold">
        Checkout
      </h2>
      {/* Form */}
      <form className="bg-gray-200 rounded-lg my-10">
        {/* input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
          <input type="text" name="firstName" placeholder="First Name" className="bg-white px-3 py-4 rounded-lg" required />
          <input type="text" name="lastName" placeholder="last Name" className="bg-white px-3 py-4 rounded-lg" />
          <input type="number" name="phone" placeholder="Your Phone" className="bg-white px-3 py-4 rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="bg-white px-3 py-4 rounded-lg" required />
          <textarea name="message" cols="30" rows="10" className="text-gray-400 px-3 py-4 rounded-lg col-span-1 md:col-span-2">Your Message...</textarea>
          <input type="submit" value="Order confirm" className=" text-white text-xl font-semibold bg-orange-600 px-3 py-4 rounded-lg cols-span-1 md:col-span-2" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
