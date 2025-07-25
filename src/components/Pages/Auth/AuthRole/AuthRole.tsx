"use client";

import sniginpic from "@/assets/auth/authImage.png";
import logo from "@/assets/hero/10mslogo-svg.svg";
import Button from "@/components/ui/Button";
import { Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const AuthRole = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const onFinish = () => {
    if (!selectedRole) {
      toast.error("Please select a role before proceeding.");
      return;
    }
    // Redirect to signup page with selected role as query param
    router.push(`/register?role=${selectedRole}`);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
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
            <Image src={logo} alt="logo" width={180} height={80} />
          </div>

          <div className="mb-8 space-y-2">
            <h2 className="text-3xl font-semibold text-black mt-4">
              Melden Sie sich an
            </h2>
          </div>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Select your role"
              rules={[{ required: true, message: "Please select your role" }]}
            >
              <div style={{ gap: "12px" }}>
                <div
                  onClick={() => handleRoleSelect("customer")}
                  className={`flex items-center justify-center border w-full h-[56px] cursor-pointer mb-5 ${
                    selectedRole === "customer"
                      ? "border-2 border-[#1EB9C6] bg-[#e6f7ff]"
                      : ""
                  }`}
                >
                  I want to be a Customer
                </div>
                <div
                  onClick={() => handleRoleSelect("provider")}
                  className={`flex items-center justify-center border w-full h-[56px] cursor-pointer ${
                    selectedRole === "provider"
                      ? "border-2 border-[#1EB9C6] bg-[#e6f7ff]"
                      : ""
                  }`}
                >
                  I want to be a Service Provider
                </div>
              </div>
            </Form.Item>

            <Button type="submit" className="w-full">
              Signup with Email
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

export default AuthRole;
