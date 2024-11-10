
import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}: {searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query;
  //retrieve query and filter fetch
  const params = { search: query || null }

  //extract session can get sanity id of the author fom user:
  const session = await auth(); 


  // const posts = await client.fetch(STARTUPS_QUERY);
  //change to sanityFetch:
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Companies
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Companies, and Get AirDrops of Virtual Currency.
        </p>

        <SearchForm query={query} />
      </section>



      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div></div>
          )}
        </ul>

      </section>

      <SanityLive />
    </>
  );
}
