import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const OurServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() =>{
         fetch("http://localhost:5000/services")
         .then(res => res.json())
         .then(data => setServices(data))
    },[])


  return (
    <>
      <div className=" text-center text-neutral-900 text-[45px] font-bold ">
        Our Services
      </div>
      <div className="text-center text-neutral-500 text-base font-normal capitalize leading-[30px] mb-[50px]">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don&apos;t look even slightly believable.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
      </div>
    </>
  );
};

export default OurServices;
