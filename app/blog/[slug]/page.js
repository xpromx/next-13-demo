import { use } from "react";
import styles from "./styles.module.css";

async function getData(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return res.json();
}

export default function Page({ params }) {
  const post = use(getData(params.slug));
  return (
    <>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return posts.map((post) => ({
    slug: String(post.id),
  }));
}
