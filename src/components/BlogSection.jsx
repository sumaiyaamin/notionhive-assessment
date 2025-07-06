const BlogSection = () => {
  const blogPosts = [
    {
      image: "/images/Rectangle 6311.png",
      title: "10 Essential SEO Strategies Every Website Owner Should Know",
      excerpt:
        "This is another way of saying, \"We've been in business for a long time because people love our products and trust us with the best works.\"",
    },
    {
      image: "/images/Rectangle 6311.png",
      title: "Unlocking the Power of Long-Tail Keywords for SEO Success",
      excerpt:
        "This is another way of saying, \"We've been in business for a long time because people love our products and trust us with the best works.\"",
    },
    {
      image: "/images/Rectangle 6311.png",
      title: "Mastering Off-Page SEO: The Art of Building Quality Backlinks",
      excerpt:
        "This is another way of saying, \"We've been in business for a long time because people love our products and trust us with the best works.\"",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Latest News from Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            In our SEO journey, we have a roadmap filled with proven strategies, witty tactics, and a touch of
            digital magic. Explore the steps that take your website from the shadows to the spotlight.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
