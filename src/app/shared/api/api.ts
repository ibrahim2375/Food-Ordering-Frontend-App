import { environment } from "src/environments/environment";
// base api
const API = environment.api;

export const FOODS_API = `${API}/api/foods`;
export const FOODS_BY_ID = `${API}/api/foods/`;
export const FOODS_BY_SEARCH = `${API}/api/foods/search/`;
export const FOOD_TAGS = `${API}/api/foods/tags`;
export const FOODS_BY_TAG = `${API}/api/foods/tag/`;
// users
export const USER_LOGIN = `${API}/api/users/login`;
export const USER_REGISTER= `${API}/api/users/register`;
//orders
export const ORDER_CREATE= `${API}/api/orders/create`;
