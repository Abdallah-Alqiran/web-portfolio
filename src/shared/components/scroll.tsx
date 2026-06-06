import { Button, ButtonProps } from "@/shared/components/ui/button";
import { useEffect, useState } from "react";

export function ScrollToTop({
  minHeight,
  scrollTo,
  ...props
}: ButtonProps & { minHeight?: number; scrollTo?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= (minHeight ?? 0));
    };

    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {visible && (
        <Button
          onClick={() =>
            window.scrollTo({
              top: scrollTo ?? 0,
              behavior: "smooth",
            })
          }
          {...props}
        />
      )}
    </>
  );
}