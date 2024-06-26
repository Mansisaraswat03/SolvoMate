import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from "@/services";

export default function Home({posts}) {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
    <div className="col-span-1 lg:col-span-8">
    {posts.map((post, index) => {
           return  <PostCard key={index} post={post.node}/>
    })}
    </div>
    <div className="lg:col-span-4 col-span-1">
      <div className="lg:sticky relative top-8">
        <PostWidget/>
        <Categories/>
      </div>
    </div>
    </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
