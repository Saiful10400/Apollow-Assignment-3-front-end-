import { ReactNode } from "react";

interface Tchildren {
  children: ReactNode;
}
const CenterAlign = ({ children }: Tchildren) => {
  return <div className="max-w-[1400px] mx-auto">{children}</div>;
};

export default CenterAlign;