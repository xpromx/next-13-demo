import Link from "next/link";
import styles from "./styles.module.css";
import { use } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Page() {
  const posts = await getData();

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <ul className={styles.posts}>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
