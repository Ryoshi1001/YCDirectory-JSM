import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({searchParams}: {searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(), 
    views: 48, 
    author: { _id: 1, name: "Adrian"}, 
    _id: 1, 
    description: "This description", 
    image: "https://placehold.co/600x400", 
    category: "Websites", 
    title: "FrontEnd Websites"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Companies
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Companies, and Get Notices as Virtual Currency.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div>coins</div>
          )}
        </ul>

      </section>
    </>
  );
}
