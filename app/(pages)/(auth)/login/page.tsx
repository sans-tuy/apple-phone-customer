"use client";

import { axiosInstance } from "@/app/hooks/axios";
import { checkAuth } from "@/app/hooks/checkAuth";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { IFormLoginInput } from "./types/login.type";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormLoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  const handleLogin: SubmitHandler<IFormLoginInput> = async (data) => {
    const res = await axiosInstance.post("auth/login", {
      email: data.email,
      password: data.password,
    });
    if (res.status !== 201) {
      console.log("invalid email or password");
      return;
    }
    localStorage.setItem("jwt", res.data.access_token);
    router.push("/");
  };

  const handleGoogleLogin = async () => {
    router.push("http://localhost:4000/auth/google");
  };

  const handleProtectedRoute = async () => {
    try {
      const res = await axiosInstance.get("auth/protected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    redirect("http://localhost:3000/product");
    // try {
    //   const res = await axiosInstance.post("auth/logout");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="flex flex-col w-screen h-screen items-center m-10 gap-10">
      <Image
        alt="apple logo"
        className="rounded-3xl object-cover"
        src="/images/png-apple-logo-9716.png"
        width={60}
        height={60}
      />
      <Card className="w-full md:w-[500px] py-10">
        <CardHeader className="flex justify-between px-10">
          <p className="text-3xl font-bold">Login</p>
          <Link href={"/register"} className="text-purple-600">
            Register
          </Link>
        </CardHeader>
        <CardBody className="px-10">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
          >
            <Input
              {...register("email", { required: true })}
              type="email"
              label="Email"
              errorMessage="Please enter a valid email"
              isRequired
            />
            {errors.email && (
              <p className="text-xs text-red-300">invalid email</p>
            )}
            <Input
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              })}
              type={isVisible ? "text" : "password"}
              label="Password"
              isRequired
              errorMessage="Please enter a valid password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <BsEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
            {errors.password && (
              <p className="text-xs text-red-300">invalid password</p>
            )}
            <Button type="submit" variant="shadow" color="secondary">
              Login
            </Button>
          </form>
          <div className="my-8 flex items-center w-[185px] gap-4">
            <Divider />
            <p className="text-center text-slate-300">or</p>
            <Divider />
          </div>
          <Button
            onClick={handleGoogleLogin}
            startContent={
              <Image
                alt="google"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                width={20}
                height={20}
                className="text-2xl"
              />
            }
            className="bg-white rounded-md border"
          >
            Login with google
          </Button>
          <Button
            onClick={handleLogout}
            startContent={
              <Image
                alt="google"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                width={20}
                height={20}
                className="text-2xl"
              />
            }
            className="bg-white rounded-md border"
          >
            tesst protected route
          </Button>
        </CardBody>
      </Card>
    </section>
  );
}
