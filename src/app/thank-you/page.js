'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ThankYou = () => {
  const router = useRouter();
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rating = params.get('rating');
    setRating(rating);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center mx-auto">
        <div className='mx-6 lg:mx-0 p-8 bg-dark-blue text-white rounded-3xl gap-5 flex flex-col max-w-[400px] justify-center items-center'>
            {/* the div for the image up top */}
      <div className="p-2 flex justify-center">
      <Image src="/illustration-thank-you.svg" width={150} height={150} />
      </div>
        {/* for the rating score */}
        <div className='rounded-full bg-gray-700 p-2 max-w-fit'>
      {rating ? (
        <p className='text-orange text-sm md:font-bold font-normal text-center'>You selected {rating} out of 5.</p>
      ) : (
        <p className='text-orange text-sm md:font-bold font-normal text-center'>Loading...</p>
      )}
      </div>
      <h1 className='text-white font-semibold text-2xl text-center'>Thank You!</h1>
      <div>
        <p className='text-gray-500 font-medium text-center text-sm'>We appreciate you taking the time to give a rating, if you ever need more supprt, don't hesitate to get in touch!</p>
      </div>
    </div>
    </main>
    
  );
};

export default ThankYou;
