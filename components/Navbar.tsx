import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = async () => {
  // logged in logic and rendering of right side of navbar
  const session = await auth();

  return (
    <header className='w-full flex flex-row items-center xs:px-[1rem] px-[60px] py-3 shadow-sm bg-white font-work-sans'>
      <nav className='flex w-full flex-row flex-wrap items-center justify-between'>
        <Link href={'/'}>
          <Image
            src={'/Logo.png'}
            alt='logo'
            width={143}
            height={30}
            className='xs:mb-1'
          />
        </Link>

        <div className='flex flex-row xxs:gap-1 xxs:justify-evenly flex-wrap items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href={'/startup/create'}><span>Create</span></Link>

              <form action={async () => {
              'use server'
              await signOut();
            }}>
              <button type='submit' className='text-[#EF4444] font-bold'>Logout</button>
            </form>


              <Link href={`/user/${session?.user?.id}`}><span>{session?.user?.name}</span></Link>
            </>
          ) : (
            <form action={async () => {
              'use server'
              await signIn('github');
            }}>
              <button type='submit' className='font-bold'>Login</button>
            </form>
          )}
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;