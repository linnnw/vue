import { get, post, qspost, put, deletefn } from '../utils/axios/axios';

export const getBrandList = data => get("/HKY-vip-api-getDynamicReview", data)

export const addBrand = data => post("/item/brand", data);