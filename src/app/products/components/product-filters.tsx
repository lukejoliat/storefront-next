"use client";

import { __DEV__ } from "@/utils";
import { createQueryString } from "@/utils/search-params";
import { useInput } from "@/utils/use-input";
import { useMediaQuery } from "@/utils/use-media-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IoMdFunnel } from "react-icons/io";
import { PATHS } from "@/app/paths";
import { Filters } from "../types/filters";
import { Drawer } from "@/components/drawer";
import { useToggle } from "@/utils/use-toggle";

export const ProductFilters = () => {
  const isMobile = useMediaQuery(600, { less: true });
  const open = useToggle();

  return (
    <>
      {isMobile ? (
        <>
          <button className="btn gap-2">
            Filters
            <div className="badge badge-primary" onClick={open.toggle}>
              <IoMdFunnel className="cursor-pointer" />
            </div>
          </button>
          <Drawer isOpen={open.value} setIsOpen={open.toggle}>
            <FilterForm />
          </Drawer>
        </>
      ) : (
        <FilterForm />
      )}
    </>
  );
};

const FilterForm = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const setQueryString = useCallback(
    (values: Record<string, unknown>) =>
      createQueryString(values, searchParams, { deleteNulls: true }),
    [searchParams]
  );
  const priceFrom = useInput(searchParams.get(Filters.PRICE_FROM) || undefined);
  const priceTo = useInput(searchParams.get(Filters.PRICE_TO) || undefined);
  const name = useInput(searchParams.get(Filters.NAME) || "");

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
    <div className="form-control mb-4">
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
