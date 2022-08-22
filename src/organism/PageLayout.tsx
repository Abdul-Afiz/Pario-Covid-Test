import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const PageLayout = (props: PageProps) => {
  return (
    <main className=" h-screen overflow-hidden w-full">{props.children}</main>
  );
};

export default PageLayout;
