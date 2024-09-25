"use client";

import React from "react";
import GlobalStyleProvider from "./GlobalStyleProvider";

function ContextProvider({ children }: Props) {
  return <GlobalStyleProvider>{children}</GlobalStyleProvider>;
}

export default ContextProvider;
