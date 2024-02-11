import { Http } from "@/http";
import type { User } from "./userTypes";

export async function fetchUsersApi() {
  const res = await Http.get<ResponseSuccess<User[]>>('/api/v1/users');
  return res?.data;
}