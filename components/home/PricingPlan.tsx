"use client"

import { checkoutPlan } from '@/lib/actions/transaction.action'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const PricingPlan = (buyerId: any) => {

  useEffect(() => {
    console.log(buyerId)
  }, [buyerId])
     
    const onCheckout = async () => {
        const transaction = {
          plan: "basic",
          amount: 25,
          buyerId: "66108f92408c1fbb0fe29286"
        }
    
        await checkoutPlan(transaction)
      }
  return (
    <div className="w-[90%] sm:w-1/2 lg:w-1/3 p-4 rounded-xl">
    <div className="bg-gray-800 bg-center bg-cover shadow-lg relative  p-6 rounded-xl" style={{backgroundImage: "url(/assets/city1.png)"}}>
    <div className="absolute inset-0 w-full  h-full bg-black opacity-15 rounded-xl" />

      <h3 className="text-4xl font-bold text-center mb-4 text-purple-400 z-[10]">
        Basic
      </h3>
      <h3 className="text-5xl text-gray-800 text-center pb-4 font-semibold">
        $15 USD
      </h3>
      <ul className="text-center text-white gray-300 text-[20px] z-[10]">
        
        <li className="mb-2">10 users included</li>
        <li className="mb-2">2 GB of storage</li>
        <li className="mb-2">Help center access</li>
        <li className="mb-2">Email support</li>
        <li className="mb-2">20 users included</li>
        <li className="mb-2">10 GB of storage</li>
        <li className="mb-2">20 users included</li>
        <li className="mb-2">20 users included</li>
        <li className="mb-2">10 GB of storage</li>

      </ul>
      <div className="text-center flex-center mt-6" onClick={onCheckout}>
        <Button  className="flex flex-row p-6 bg-blue-500 hover:bg-blue-700 text-xl font-semibold rounded-xl text-white z-[10]">
          <Image
            src="/assets/logo.png"
            alt="thundercloud logo"
            width={50}
            height={50}
          />
          Get BuildBreeze
        </Button>
      </div>
    </div>
  </div>
  )
}

export default PricingPlan