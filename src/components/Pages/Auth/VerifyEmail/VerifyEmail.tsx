"use client";

import OTPInput from "react-otp-input";
import Button from "@/components/ui/Button";
import {
  useForgotPasswordMutation,
  useVerifyEmailMutation,
} from "@/redux/features/auth/authApi";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import sniginpic from "@/assets/auth/authImage.png";

const VerifyEmail = () => {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  console.log(verifyEmail);
  const [forgotPassword] = useForgotPasswordMutation();
  const [oneTimeCode, setOneTimeCode] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const type = searchParams.get("type") || "";

  // Handle OTP change
  const handleOtpChange = (otpValue: string) => {
    setOneTimeCode(otpValue);
  };

  // Handle form submission
  const onFinish = async () => {
    try {
      const res = await verifyEmail({ email, oneTimeCode }).unwrap();
      toast.success(res.message);
      router.push(
        `/${type === "register" ? "login" : `reset-password?email=${email}`}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await forgotPassword({ email }).unwrap();
      toast.success(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-full md:h-screen w-full"
      style={{
        backgroundColor: "#B0C3E7", // Background color
        backgroundImage: `url(${sniginpic.src})`, // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24 py-16 m-auto z-10 relative">
        {/* Card with white background */}
        <div className="w-full max-w-xl border-[#1EB9C6] shadow-black bg-white rounded-lg shadow-lg px-8 py-6">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl font-semibold text-black mt-4">
              E-Mail bestätigen
            </h2>

          </div>
          <div className="flex justify-center items-center space-x-2">
            <OTPInput
              value={oneTimeCode}
              onChange={handleOtpChange}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              containerStyle="otp-container"
              inputStyle={{
                width: "100%",
                maxWidth: "6.5rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                fontWeight: "bold",
                border: "2px solid #15838D", // Change to match border color
                textAlign: "center",
                outline: "none",
                backgroundColor: "#fff", // White background for inputs
                color: "#333", // Dark text for visibility
                borderRadius: "5px", // Rounded corners if desired
                transition: "border-color 0.3s", // Add smooth transition on focus
              }}
            />
          </div>
          <div className="mt-5 text-center">
            <Button onClick={onFinish} loading={isLoading} className="w-full">
              Verify Email
            </Button>
          </div>
          <div className="flex justify-between items-center mt-8">
            <p className="text-black text-center">
              Ko gba OTP? Tun OTP ranṣẹ?{" "}
            </p>
            <span
              onClick={handleResendOtp}
              className="text-primary cursor-pointer hover:underline"
            >
              Verifizieren
            </span>
          </div>
        </div>
      </div>
      {/* Right Side (if needed) */}
    </div>
  );
};

export default VerifyEmail;
