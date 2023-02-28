import BlogItem from './blog-item';

export default function BlogList(props) {
  return (
    <div className="container p-10 lg:w-full lg:h-full lg:items-center lg:grid lg:grid-cols-2 lg:gap-4 ">
      {props.Blog.map((datas) => (
        <BlogItem
          key={datas.id}
          id={datas.id}
          body={datas.body}
          title={datas.title}
          userId={datas.user_id}
        />
      ))}
    </div>
  );
}
