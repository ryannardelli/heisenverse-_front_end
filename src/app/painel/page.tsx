"use client";

import { SideBar } from "../components/Sidebar";
import { Main } from "../components/Main";
import { ReactNode } from "react";

export default function Painel( { children }: { children: ReactNode } ) {
  return (
    <>
      <SideBar />
      {/* <Main /> */}
      <Main>{children}</Main>
    </>
  );
}
