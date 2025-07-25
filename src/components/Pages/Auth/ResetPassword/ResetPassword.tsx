"use client";
import logo from "@/assets/logo/dating-logo.png";
import authBannerImage from "@/assets/logo/dating-logo.png";
import InputComponent from "@/components/ui/InputComponent";
import Button from "@/components/ui/Button";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import sniginpic from "@/assets/auth/authImage.png";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const onFinish = async (values: ResetPasswordFormValues) => {
    try {
      const res = await resetPassword({
        email,
        newPassword: values.password,
      }).unwrap();
      toast.success(res.message);
      router.push("/login");
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
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative text-black">
        <div className="w-full max-w-xl border-[#1EB9C6] shadow-black bg-[#f8f8f8] rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8">
            <div className="w-28 h-28 mx-auto relative space-y-2">
              <div className="flex justify-center">
                <Image src={logo} alt="logo" width={180} height={80} />
              </div>
            </div>
            <h2 className="text-3xl font-semibold mt-4">
              Passwort Zurücksetzen
            </h2>
          </div>
          <Form layout="vertical" onFinish={onFinish} className="space-y-5">
            <Form.Item
              name="Neu Password"
              rules={[
                {
                  required: true,
                  message: "Please enter a new password",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters",
                },
              ]}
              hasFeedback
            >
              <InputComponent isPassword placeholder="Geben Sie Ihr Passwort ein" />
            </Form.Item>
            <Form.Item
              name="Bestätigen Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your new password",
                },
                {
                  min: 6,
                  message: "Password must be at least 6 characters",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match"));
                  },
                }),
              ]}
              hasFeedback
            >
              <InputComponent isPassword placeholder="Geben Sie Ihr Passwort ein" />
            </Form.Item>
            <Button loading={isLoading} type="submit">
              Passwort zurücksetzen
            </Button>
          </Form>
          <div className="mt-5 text-center">
            <Link href="/login" className="hover:underline ml-1">
              Zurück zum Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:block  relative">
        <Image
          src={authBannerImage}
          alt="Forgot Password Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
