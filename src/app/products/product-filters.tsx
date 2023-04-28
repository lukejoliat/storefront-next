"use client";

import { __DEV__ } from "@/utils";
import { createQueryString } from "@/utils/search-params";
import { useInput } from "@/utils/use-input";
import { useMediaQuery } from "@/utils/use-media-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IoMdFunnel } from "react-icons/io";
import { PATHS } from "../page";
import { Filters } from "./page";
import { NewDrawer } from "@/components/new-drawer";
import { useToggle } from "@/utils/use-toggle";

export const ProductFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useMediaQuery(600, { less: true });

  // TODO: refactor to a form
  const priceFrom = useInput(searchParams.get(Filters.PRICE_FROM) || undefined);
  const priceTo = useInput(searchParams.get(Filters.PRICE_TO) || undefined);
  const name = useInput(searchParams.get(Filters.NAME) || "");
  const open = useToggle();

  const setQueryString = useCallback(
    (values: Record<string, unknown>) =>
      createQueryString(values, searchParams, { deleteNulls: true }),
    [searchParams]
  );

  const handleSubmit = () => {
    router.push(
      `${PATHS.PRODUCTS}?${setQueryString({
        [Filters.PRICE_FROM]: priceFrom.value,
        [Filters.PRICE_TO]: priceTo.value,
        [Filters.NAME]: name.value,
      })}`
    );
  };

  return (
    <>
      {isMobile ? (
        <>
          <IoMdFunnel onClick={open.toggle} />
          <NewDrawer isOpen={open.value} setIsOpen={open.toggle}>
            Filters
          </NewDrawer>
        </>
      ) : (
        <form>
          <ul>
            {/* TODO: refactor form to be dynamic? refactor inputs to be a custom component */}
            <li>
              <ProductFilterInput {...name} name={Filters.NAME} label="Name" />
            </li>
            <li>
              <ProductFilterInput
                {...priceFrom}
                name={Filters.PRICE_FROM}
                label="Price From"
              />
            </li>
            <li>
              <ProductFilterInput
                {...priceTo}
                name={Filters.PRICE_TO}
                label="Price To"
              />
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleSubmit}
          >
            Filter
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => router.push(`${PATHS.PRODUCTS}`)}
          >
            Clear
          </button>
        </form>
      )}
    </>
  );
};

if (__DEV__) {
  ProductFilters.displayName = "ProductFilters";
}

// TODO: evaluate the usefullness of this
const ProductFilterInput = ({
  name,
  type = "text",
  value,
  onChange,
  label,
}: {
  name: string;
  type: string;
  value: string | number | undefined;
  onChange: (event: any) => void;
  label: string;
}) => {
  return (
    <div className="form-control py-2">
      <label className="input-group input-group-md">
        <span className="min-w-fit">{label}</span>
        <input
          type={type}
          placeholder="Type here"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full input input-bordered input-md"
        />
      </label>
    </div>
  );
};
