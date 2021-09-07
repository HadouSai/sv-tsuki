import { useEffect } from "react";

export interface ITypeWriter {
  phrase: string;
  id: string;
  speed: number;
}

export const TypeWriter = ({ phrase, id, speed }: ITypeWriter) => {
  let i = 0;

  const sleep = (speed: number) =>
    new Promise((resolve) => setTimeout(resolve, speed));

  const setWord = async (element: HTMLElement, i: number) => {
    await sleep(speed);
    element.innerHTML += phrase.charAt(i);
  };

  return <p className="" id={id}></p>;
};
