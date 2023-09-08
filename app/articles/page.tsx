import Image from "next/image";
import Link from "next/link";

export default function Articles() {

  const posts = [
    {id: 1, title: 'Hello World', date: '20 October 2019'},
    {id: 2, title: 'Hello World', date: '20 October 2019'},
  ];


  return (<>
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {posts.map((post, id) => 
            
            <div className="lg:flex" key={id}>
            <Image
              className="object-cover w-full h-56 rounded-lg lg:w-64"
              src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              width={100}
              height={100} />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
              <Link href={"/articles/"+post.id.toString()} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                {post.title}
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-300">On: {post.date}</span>
            </div>
          </div>
          )}

        </div>
      </div>
    </section>
  </>)
}