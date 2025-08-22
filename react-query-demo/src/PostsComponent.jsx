import { useQuery, useQueryClient } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isPending,         // initial load
    isFetching,        // background refetch indicator
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // show only first 15 to keep UI compact
    select: (data) => data.slice(0, 15),
  });

  if (isPending) return <p style={{ padding: 16 }}>Loading posts…</p>;
  if (isError) return <p style={{ padding: 16, color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: 16 }}>
      <header style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        {isFetching && <small>(updating…)</small>}
      </header>

      <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
        <button onClick={() => refetch()}>Refetch now</button>
        <button
          onClick={() => queryClient.invalidateQueries({ queryKey: ["posts"] })}
          title="Marks the query stale & triggers fetch"
        >
          Invalidate Cache
        </button>
      </div>

      <ul style={{ lineHeight: 1.6 }}>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>#{p.id}</strong> — {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
