import { __DEV__ } from "."

export const basePath = () => {
    return __DEV__ ? `http://localhost:3000` : 'https://next-storefront.com'
}