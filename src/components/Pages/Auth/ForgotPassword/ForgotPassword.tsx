"use client";
import InputComponent from "@/components/ui/InputComponent";
import { Form } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import sniginpic from "@/assets/auth/authImage.png";
import logo from "@/assets/logo/dating-logo.png";
import Image from "next/image";


interface LoginFormValues {
  email: string;
}

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const res = await forgotPassword({ email: values.email }).unwrap();
      toast.success(res.message);
      router.push(`/verify-email?email=${values.email}&type=forgot-password`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full"
      style={{
        backgroundImage: `url(${sniginpic.src})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Color Overlay */}


      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        {/* Card with white background */}
        <div className="w-full max-w-xl border-[#1EB9C6] shadow-black bg-white rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <Image src={logo} alt="logo" width={180} height={80} className="" />
            </div>


            <h2 className="text-3xl font-semibold text-black mt-4">
              Passwort vergessen
            </h2>
             
          </div>
          <Form layout="vertical" onFinish={onFinish} className="space-y-5">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <InputComponent placeholder="Geben Sie Ihre E-Mail-Adresse ein" />
            </Form.Item>
            <Button type="submit" loading={isLoading} className="w-full">
            OTP senden
            </Button>
          </Form>
          <div className="mt-5 text-center">
            <Link
              href="/login"
              className="text-[#1EB9C6] font-semibold hover:underline"
            >
              Zurück zum Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
