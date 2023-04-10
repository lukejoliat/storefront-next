'use client'

import { createQueryString } from '@/utils/search-params';
import { useInput } from '@/utils/use-input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from "react";
import { PATHS } from "../page";

export enum Filters {
    NAME = 'name',
    PRICE_FROM = 'price-from',
    PRICE_TO = 'price-to'
}

export const ProductFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // TODO: refactor to a form
    const priceFrom = useInput(searchParams.get('price-from') || undefined)
    const priceTo = useInput(searchParams.get('price-to') || undefined)
    const name = useInput(searchParams.get('name') || undefined)

    const setQueryString = useCallback((values: Record<string, unknown>) => createQueryString(values, searchParams, { deleteNulls: true }),
        [searchParams],
    );

    const handleSubmit = () => {
        router.push(`${PATHS.PRODUCTS}?${setQueryString({
            ['price-from']: priceFrom.value,
            ['price-to']: priceTo.value,
            name: name.value
        })}`)
    }


    return (
        <div>
            <ul>
                {/* TODO: refactor form to be dynamic? refactor inputs to be a custom component */}
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" {...name} className='text-rose-500' />
                </li>
                <li>
                    <label htmlFor="price-from">Price From</label>
                    <input type="number" id="price-from" name="price-from" {...priceFrom} className='text-rose-500' />
                </li>
                <li>
                    <label htmlFor="price-to">Price To</label>
                    <input type="number" id="price-to" name="price-to" {...priceTo} className='text-rose-500' />
                </li>
                <li>
                    <ProductFilterInput label='Type' type="text" name="type" />
                </li>
            </ul>
            <button type="button" onClick={handleSubmit}>Filter</button>
            <button type="button" onClick={() => router.push(`${PATHS.PRODUCTS}`)}>Clear Filters</button>
        </div>
    )
}

// TODO: evaluate the usefullness of this
const ProductFilterInput = ({ name, type, label }: { name: string, type: string, label: string }) => {
    const searchParams = useSearchParams();
    const input = useInput(searchParams.get(name) || undefined);

    return (
        <>
            <label htmlFor="type">{label}</label>
            <input type={type} id={name} name={name} {...input} className='text-rose-500' />
        </>
    )
}