import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();
  console.log(session);

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) {
    return notFound();
  }

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className='text-24-black uppercase text-center'>{user.name}</h3>
          </div>
          <Image
          src={user.image}
          alt='MeDrawing'
          width={220}
          height={220}
          className='rounded-full border-4 border-black-200 bg-white'
          />
          <p className='text-30-extrabold mt-7 text-center'>
            @{user?.username}
          </p>

          <p className='mt-1 text-center text-14-normal'>
            {user.bio}
          </p>
        </div>

        <div className='flex flex-col gap-4 lg:-mt-4'>
          <p className='text-30-bold'>
            {session?.id === id ? "Your" : "All"} Startups
          </p>

          <ul className='card_grid-sm'>
            {/* user startups */}

          </ul>

        </div>
      </section>
    </>
  );
};

export default page;
