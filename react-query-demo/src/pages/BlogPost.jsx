import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div style={{ padding: 16 }}>
      <h1>Blog Post #{id}</h1>
      <p>This is dynamic routing in action 🚀</p>
    </div>
  );
}
