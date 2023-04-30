import { environment } from "src/environments/environment";
// base api
const API = environment.api;

export const FOODS_API = `${API}/api/foods`;
export const FOODS_BY_ID = `${API}/api/food/`;
export const FOODS_BY_SEARCH = `${API}/api/foods/search/`;
export const FOODS_BY_TAG = `${API}/api/foods/tag/`;
