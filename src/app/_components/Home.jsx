"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Home () {
    const [rating, setRating] = useState(null);
    const router = useRouter();
  
  


    const handleSubmit = () => {
      if (rating !== null) {
        router.push(`/thank-you?rating=${rating}`);
      }
    };


const Number = [
  {
      id:1,
      name:"1",
      
  },
  {
      id:2,
      name:"2",
      
  },
  {
      id:3,
      name:"3",
      
  },
  {
    id:4,
    name:"4",
    
},
{
  id:5,
  name:"5",
  
},

]

return (
  <main className="flex min-h-screen flex-col items-center justify-center mx-auto">
    {/* Main div */}
    <div className="mx-6 lg:mx-0 p-8 bg-dark-blue text-white rounded-3xl gap-5 flex flex-col max-w-[400px]">
      {/* the div for the star */}
      <div className="rounded-full shadow-md p-2 bg-gray-700 w-fit">
      <Image src="/icon-star.svg" width={15} height={15} />
      </div>
      {/* first heading */}
      <div className="text-white">
        <h1 className=" font-bold lg:text-2xl text-lg tracking-widest mt-3">How did we do?</h1>
      </div>
      {/* second writing */}
      <div className>
        <p className="lg:text-sm text-xs text-light-grey lg:leading-7 leading-5 font-medium tracking-normal lg:font-semibold lg:tracking-wider">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      {/* for the numbers */}
      <div className="flex flex-row gap-4">
      {Number.map((item) => (
        <div
        key={item.id}
        onClick={() => setRating(item.id)}
        className={`rounded-full shadow-md w-full flex items-center justify-center md:p-4 p-3 flex-row ${
            rating === item.id ? 'bg-white text-very-dark-blue' : 'bg-gray-700 text-dark-blue hover:bg-orange'
        }`}>
          <p className='text-light-grey hover:text-dark-blue font-semibold text-xs lg:text-base'>{item.name}</p>
        </div> 
          ))}
      </div>
      {/* for the submit button */}
      <div>
        
        <button
        onClick={handleSubmit}
          className="bg-orange hover:bg-white w-full px-4 py-3 text-very-dark-blue rounded-full font-bold tracking-widest text-sm md:text-base">SUBMIT</button>
         
      </div>
    </div>
  </main>
);
  
}

export default Home



