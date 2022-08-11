import { FC } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { routGenerator } from "../routes/routingGenerator";
import { routList } from "../routes/routsList";

export const App: FC = () => {
  return <Routes>{routGenerator(routList)}</Routes>;
}
