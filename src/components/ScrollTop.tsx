// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("ScrollToTop component mounted, current pathname:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
