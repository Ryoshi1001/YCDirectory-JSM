'use client'

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {

  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement; 
 
    if(form){
      form.reset(); 
    } 
   }
   
  return (
    <Button className='text-white search-btn' type='reset' onClick={reset}>
      <Link href={'/'} className='text-white-100'>
      <X className='size-5 text-white'/>
      </Link>
    </Button>
  )
}

export default SearchFormReset