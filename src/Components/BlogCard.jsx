const BlogCard = ({ cover, published_date, category, author, title }) => {
  return (
    <div className="bg-white  shadow-lg shadow-gray-200/50  border-gray-200/50 ">
      <img
        src={cover}
        alt="illustration"
        width={1300}
        className="w-full aspect-[5/3] object-cover bg-gray-100 "
      />
      <div className="relative p-4 pt-10">
        <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
          <p className="font-bold text-2xl text-white">{published_date.day}</p>
          <p className="text-sm text-gray-200">{published_date.month}</p>
        </div>
        <div className="flex items-center text-gray-500 ">
          <span>{category}</span>
          <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400" />
          <span>{author}</span>
        </div>
        <h1 className="text-xl my-6 font-semibold text-gray-900 ">{title}</h1>
        <a
          href="#"
          className="text-blue-600  transition hover:text-opacity-90 flex items-center gap-x-3 group">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 transition-all ease-linear group-hover:ml-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const posts = [
  {
    id: 1,
    cover:
      "https://autismawarenesscentre.com/wp-content/uploads/aaci-Receiving-an-Autism-Diagnosis-in-the-Teen-Years-74595223-1200x800.jpg",
    published_date: {
      day: "20",
      month: "April",
    },
    category: "categoryName",
    author: "John Doe",
    title: "Receiving an Autism Diagnosis in the Teen Years",
  },
  {
    id: 2,
    cover:
      "https://autismawarenesscentre.com/wp-content/uploads/aaci-debreifing-blog-te-172103177-1200x800.jpg",
    published_date: {
      day: "20",
      month: "April",
    },
    category: "categoryName",
    author: "John Doe",
    title: "What does it mean to debrief after an incident occurs?",
  },
  {
    id: 3,
    cover:
      "https://autismawarenesscentre.com/wp-content/uploads/AACI-Select-Insistence-on-Sameness-and-Routine-385815860-1200x790.jpg",
    published_date: {
      day: "20",
      month: "April",
    },
    category: "categoryName",
    author: "John Doe",
    title:
      "Insistence on Sameness and Routine – Understanding a Hallmark Autism Trait",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900  capitalize">
            Our most recent Articles
          </h1>
          <p className="text-gray-700 ">
            Welcome to Autistic Brains Blog, your hub for insights and support
            on autism spectrum disorder. Explore articles, book reviews, and
            resources curated by a seasoned parent and advocate. Join our
            community to learn, share, and connect with others on the autism
            journey
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/BlogPost"
            className="px-5 py-2.5 border border-gray-100  text-blue-600  flex items-center gap-x-3">
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
