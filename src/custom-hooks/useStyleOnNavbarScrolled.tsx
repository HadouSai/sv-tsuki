import { useCallback, useEffect } from "react";

interface Props {
  className: string;
  idNavbar: string;
}

/**
 * Assign the ClassName to the navbar with the `idNavbar`, when
 * the scrollTop is 5px, otherwise the className will be removed
 * @param Props
 */
export const useStyleOnNavbarScrolled = ({ className, idNavbar }: Props) => {
  const handleScrollMemo = useCallback(() => {
    const navbarElement = document.getElementById(idNavbar);

    document.documentElement.scrollTop > 5
      ? navbarElement?.classList.add(className)
      : navbarElement?.classList.remove(className);
  }, [className, idNavbar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollMemo);
    return () => {
      window.removeEventListener("scroll", handleScrollMemo);
    };
  }, [handleScrollMemo]);
};
