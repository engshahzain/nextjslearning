import { Blogs } from "@/lib/blogs";

type params = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: { params: params }) => {
  const { slug } = await params;
  console.log("slug", slug);
  const blog = Blogs.find((item) => item.slug === slug);

  return {
    title: `${blog.name}`,
    description: `${blog?.blog}`,
  };
};

const page = async ({ params }: { params: params }) => {
  const { slug } = await params;

  const blog = Blogs.find((item) => item.slug === slug);
  return (
    <div className="p-10">
      <div className="container mx-auto p-10 flex flex-col gap-2 border-gray-300 border rounded">
        <h2 className="text-center text-xl font-bold">{blog?.name}</h2>
        <article className="text-center">{blog?.blog}</article>
      </div>
    </div>
  );
};

export default page;
