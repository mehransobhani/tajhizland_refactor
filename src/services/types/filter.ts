import {FilterItemResponse} from "@/services/types/filterItem";
import { ProductFilterResponse } from "./productFilter";

export type FilterResponse = {
    id: number|string,
    name: string,
    status: number,
    type: string,
    items:{ data :FilterItemResponse[]},
    productFilters?:ProductFilterResponse
}
