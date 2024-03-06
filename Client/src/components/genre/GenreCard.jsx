import React from "react";
import { useParams } from "react-router-dom";

export default function GenreCard() {
  const { name } = useParams();

  console.log(name);
  return <div>GenreCard</div>;
}
