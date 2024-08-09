import { redirect } from "next/navigation";
import { axiosInstance } from "../axios";

export async function checkAuth() {
  const token = localStorage.getItem("jwt");
  if (!token) {
    redirect("/product");
  } else {
    try {
      const res = await axiosInstance.get("auth/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        if (!res.data) {
          redirect("/product");
        }
      } else {
        redirect("/product");
      }
    } catch (error) {
      localStorage.removeItem("jwt");
      redirect("/product");
    }
  }
}
