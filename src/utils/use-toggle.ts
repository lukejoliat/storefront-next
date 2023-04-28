import { useState } from "react";

type Toggle = {
  toggle: () => void;
  value: boolean;
};

export const useToggle = () => {
  const [value, toggle] = useState<boolean>(false);

  const handleToggle = () => toggle((value) => !value);

  return { value, toggle: handleToggle };
};
