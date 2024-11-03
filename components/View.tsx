import React from 'react'
import Ping from './Ping'
import { VIEWS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client';

const View = async ({ id } : { id: string } ) => {

  const { views: totalViews } = await client
  .withConfig({useCdn: false})
  .fetch(VIEWS_QUERY, {id}); 

  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping/>
      </div>

      <div>
        <p className='view-text'>
          Views: {totalViews}
        </p>
      </div>
    </div>
  )
}

export default View