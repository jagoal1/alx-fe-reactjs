import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Router Basics" },
  { id: 2, title: "Nested Routes in Depth" },
  { id: 3, title: "Protecting Routes with Auth" },
];

export default function Blog() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
