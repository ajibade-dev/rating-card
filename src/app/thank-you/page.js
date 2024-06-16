'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        <div className=''>
      <h1>Thank You!</h1>
      {rating ? (
        <p>Congratulations, you selected the number {rating} out of 5.</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </main>
    
  );
};

export default ThankYou;
