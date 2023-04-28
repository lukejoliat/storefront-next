"use client";

import clsx from "clsx";
import { ReactNode, createElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");
  return drawerRoot;
}

export const NewDrawer = ({
  children,
  isOpen = false,
  position = "left",
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (params: any) => void;
  position?: "left" | "right";
}) => {
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );
  useEffect(() => {
    if (!document.getElementById("drawer-root")) {
      document.body.append(portalRootRef.current);
    }
  }, []);

  return (
    <>
      {createPortal(
        <>
          <div
            className={clsx(
              "new-drawer z-20 fixed top-0 h-[100vh] bg-slate-500 text-white p-4 w-full max-w-sm transition-all duration-500 transform shadow-lg",
              //   isOpen && position ? "translate-x-0" : "translate-x-[-100%]",
              {
                "translate-x-0": isOpen,
                "translate-x-[-100%]": !isOpen && position === "left",
                "translate-x-[100%]": !isOpen && position === "right",
                "right-0": position === "right",
              }
            )}
          >
            {isOpen && <>{children}</>}
          </div>
          <div
            className={clsx(
              "new-drawer-overlay cursor-pointer fixed  transition-opacity transform duration-2000 z-10 top-0 left-0 bg-black opacity-50",
              isOpen ? "opacity-50 w-[100vw] h-[100vh]" : "opacity-0"
            )}
            onClick={setIsOpen}
          />
        </>,
        portalRootRef.current
      )}
    </>
  );
};
