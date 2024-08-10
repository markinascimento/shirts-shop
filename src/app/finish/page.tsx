'use client'
// -> ReactJS
import { useEffect } from 'react';

// -> NextJS
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// -> Icons lib
import { CheckCheck } from 'lucide-react';

// -> ContextAPI
import { useShoes } from '@/hooks/useShoes';

// -> Images
import sucessImage from '@/assets/sucess.svg';

export default function Finish() {
  const router = useRouter()
  const { cartItems } = useShoes();

  useEffect(() => {
    if(cartItems.length <= 0) {
      return router.back()
    }
  }, [cartItems, router]);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto px-2'>
      <section className='flex flex-col gap-4 items-center justify-center'>
        <div 
          className="flex items-center justify-center w-20 h-20 border-4 
          border-lime-500 rounded-full"
        >
          <CheckCheck className='size-10 text-lime-500' strokeWidth={3} />
        </div>

        <h1 className='text-2xl font-bold text-lime-500'> 
          Purchase completed <br /> 
          successfully 
        </h1>

        <p className='text-xs opacity-50 font-medium'>
        Thank you for your purchase! Your order has been received <br /> 
        and is being processed with care. 🌟
        </p>
      </section>

      <Image
        src={sucessImage}
        alt='Imagem quando finalizar a compra com sucesso'
        priority
      />
    </div>
  )
}
