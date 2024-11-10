import { auth, signIn, signOut } from '@/auth';
import { BadgePlus, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = async () => {
  // logged in logic and rendering of right side of navbar
  const session = await auth();

  console.log(session)

  return (
    <header className="w-full flex flex-row items-center xs:px-[1rem] px-[60px] py-3 shadow-sm bg-white font-work-sans">
      <nav className="flex w-full flex-row flex-wrap items-center justify-between">
        <Link href={'/'}>
          <Image
            src={'/Logo.png'}
            alt="logo"
            width={143}
            height={30}
            className="xs:mb-1"
          />
        </Link>

        <div className="flex flex-row items-center justify-end flex-wrap gap-4 text-black xxs:w-full">
          {session && session?.user ? (
            <>
              <Link href={'/startup/create'}>
                <BadgePlus className="xs:block hidden" />
                <span className=" xs:hidden">Create</span>
              </Link>

              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button type="submit" className="text-[#EF4444] font-bold">
                  <LogOut className="xs:block hidden mt-1" />
                  <span className='xs:hidden'>Logout</span>
                </button>
              </form>

              <Link
                className="flex flex-row items-center justify-center xs:gap-0 gap-1"
                href={`/user/${session?.id}`}
              >
                <span className="xs:hidden">{session?.user?.name}</span>
                <Avatar className="size-10 border rounded-full">
                  <AvatarImage
                    src={session?.user?.image || ''}
                    alt={session?.user?.name || ''}
                    width={80}
                    height={80}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                'use server';
                await signIn('github');
              }}
            >
              <button type="submit" className="font-bold">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
