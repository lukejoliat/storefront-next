type Options = {
    deleteNulls?: boolean
}

export const createQueryString = (values: Record<string, unknown>, searchParams: URLSearchParams, options: Options = {}) => {
    const params = new URLSearchParams(searchParams);

    for (let name of Object.keys(values)) {
        const value = values[name];
        if (value) params.set(name, `${values[name]}`);
        else if (options.deleteNulls === true) params.delete(name)
    }

    return params.toString();
}
