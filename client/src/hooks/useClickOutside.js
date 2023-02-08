import { useEffect, useRef } from "react";

function useClickOutside(func) {
  let domNode = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !domNode.current.contains(event.target) &&
        event.target.localName !== "html" &&
        event.target.localName !== "button" &&
        event.target.localName !== "span"
      ) {
        func();
      }
    };

    document.addEventListener("mouseup", handleClick);

    return () => document.removeEventListener("mouseup", handleClick);
  }, []);

  return domNode;
}

export default useClickOutside;
