import styles from "./styles/Detail.module.css";

import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import Movies from "./Movies";
import Todo from "./Todo";
import Blog from "./Blog";
import Shortly from "./Shortly";

export default function Detail(): JSX.Element {
  let { id } = useParams();

  useEffect(() => {
    document.title = "Minimalist Portfolio | Project Details";
  }, []);

  return (
    <main className={styles.main}>
      {id === "movies" && <Movies />}
      {id === "todo" && <Todo />}
      {id === "blog" && <Blog />}
      {id === "shortly" && <Shortly />}
      <SectionThree />
    </main>
  );
}
