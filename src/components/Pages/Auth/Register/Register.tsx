"use client";

import sniginpic from "@/assets/auth/authImage.png";
import logo from "@/assets/hero/10mslogo-svg.svg";
import Button from "@/components/ui/Button";
import InputComponent from "@/components/ui/InputComponent";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { RegisterFormValues } from "@/types/authTypes";
import { Checkbox, Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // <-- get search params
  const roleFromUrl = searchParams.get("role") || "user"; // default role if none in URL

  const [registerUser, { isLoading }] = useRegisterMutation();

  const onFinish = async (values: RegisterFormValues) => {
    const registrationData = { ...values, role: roleFromUrl }; // use role from URL

    try {
      const res = await registerUser(registrationData).unwrap();
      console.log(res);

      toast.success(res.message);
      router.push(
        `/verify-email?email=${registrationData.email}&type=register`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full"
      style={{
        backgroundImage: `url(${sniginpic.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        <div className="w-full max-w-xl border border-[#1EB9C6] shadow-black bg-white rounded-lg shadow-lg px-8 py-6">
          <div className="flex justify-center">
            <Image src={logo} alt="logo" width={180} height={80} className="" />
          </div>

          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-semibold text-black mt-4">
              Melden Sie sich an
            </h2>
          </div>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <InputComponent placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
            >
              <InputComponent
                placeholder="Geben Sie Ihr Passwort ein"
                isPassword
              />
            </Form.Item>

            <Form.Item>
              <Checkbox className="text-black">
                Ich stimme allen
                <span className="text-blue-500">Geschäftsbedingungen zu</span>
              </Checkbox>
            </Form.Item>

            <Button type="submit" loading={isLoading} className="w-full">
              Melden Sie sich an
            </Button>
          </Form>
          <p className="text-center text-sm text-black mt-6">
            Hast du schon ein Konto?{" "}
            <Link href="/login" className="text-[#1EB9C6] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
