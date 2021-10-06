import { CommonIconsI } from "./icons.interface";

export const JavascriptSvg = ({ className = "" }: CommonIconsI) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      height="1em"
      width="1em"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path d="M23.25,24H0.75C0.336,24,0,23.664,0,23.25V0.75C0,0.336,0.336,0,0.75,0h22.5C23.664,0,24,0.336,24,0.75v22.5C24,23.664,23.664,24,23.25,24z M1.5,22.5h21v-21h-21V22.5z" />
      <path d="M9.5 22c-1.538 0-2.876-1.092-3.184-2.596C6.272 19.189 6.25 18.97 6.25 18.75 6.25 18.336 6.586 18 7 18s.75.336.75.75c0 .119.012.238.036.354C7.951 19.913 8.672 20.5 9.5 20.5c.965 0 1.75-.785 1.75-1.75v-7c0-.414.336-.75.75-.75s.75.336.75.75v7C12.75 20.542 11.292 22 9.5 22zM18.25 22c-1.93 0-3.5-1.346-3.5-3 0-.414.336-.75.75-.75s.75.336.75.75c0 .813.916 1.5 2 1.5s2-.687 2-1.5c0-.736-.746-1.336-2.218-1.782C15.916 16.575 14.75 15.433 14.75 14c0-1.654 1.57-3 3.5-3s3.5 1.346 3.5 3c0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.813-.916-1.5-2-1.5s-2 .687-2 1.5c0 .965 1.39 1.531 2.218 1.782 2.713.823 3.282 2.204 3.282 3.218C21.75 20.654 20.18 22 18.25 22z" />
    </svg>
  );
};