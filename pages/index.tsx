import Link from "next/link";
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import { sanityClient, urlFor} from "../sanity"
import { Post } from "../typing";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Jumbotron />
      {/*POST*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer">
              <img className="rounded-lg h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
              <div className="flex justify-between p-5 border-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">{post.description} by {post.author.name}</p>
                  </div>
                  <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {

  const query = `*[_type == "post"]{
    _id,
    title,
    description,
    mainImage,
    slug,
    author -> {
     name,
     image
    }
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }
}