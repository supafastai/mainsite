"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  // This regex allows for international phone numbers
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/\D/g, "")); // Remove non-digits before testing
}

function validateInput(value: string): boolean {
  return value.trim().length > 0;
}

function Page() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validate all inputs
    if (!validateInput(name)) {
      setError("Name is required");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!validateInput(companyName)) {
      setError("Company name is required");
      setLoading(false);
      return;
    }

    if (!validateInput(companyDescription)) {
      setError("Company description is required");
      setLoading(false);
      return;
    }

    if (!validateInput(companyLocation)) {
      setError("Company location is required");
      setLoading(false);
      return;
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from("early_access")
        .insert([
          {
            client_name: name.trim(),
            email: email.trim(),
            phone_number: phone.trim(),
            company: companyName.trim(),
            company_industry: companyDescription.trim(),
            company_location: companyLocation.trim(),
          },
        ])
        .select();

      if (insertError) throw insertError;

      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const questions = [
    {
      id: 1,
      question: "What's your name?",
      type: "text",
      value: name,
      setValue: setName,
      placeholder: "Enter your name",
    },
    {
      id: 2,
      question: "What's your email?",
      type: "email",
      value: email,
      setValue: setEmail,
      placeholder: "Enter your email",
    },
    {
      id: 3,
      question: "What's your company name?",
      type: "text",
      value: companyName,
      setValue: setCompanyName,
      placeholder: "Enter your company name",
    },
    {
      id: 4,
      question: "What does your company do?",
      type: "text",
      value: companyDescription,
      setValue: setCompanyDescription,
      placeholder: "Enter your company description",
    },
    {
      id: 5,
      question: "Where is your primary location located?",
      type: "text",
      value: companyLocation,
      setValue: setCompanyLocation,
      placeholder: "Enter your company location",
    },
    {
      id: 6,
      question: "Can we call you?",
      type: "phone",
      value: phone,
      setValue: setPhone,
      placeholder: "Enter your phone number",
    },
  ];

  const currentQuestion = questions[step - 1];

  const handleNext = () => {
    // Validate current step before proceeding
    if (step === 2 && !validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (step === 6 && !validatePhone(phone)) {
      setError("Please enter a valid phone number");
      return;
    }

    if (!validateInput(currentQuestion.value)) {
      setError("This field is required");
      return;
    }

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      handleSignUp({ preventDefault: () => {} } as React.FormEvent);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
            >
              Get started with Supafast AI
            </motion.h2>
            {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600"
              >
                Or{" "}
                <Link
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  sign in to your account
                </Link>
              </motion.p> */}
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6"
                  >
                    {currentQuestion.question}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentQuestion.type === "phone" ? (
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="US"
                        value={currentQuestion.value}
                        onChange={(value) =>
                          currentQuestion.setValue(value || "")
                        }
                        onKeyPress={handleKeyPress}
                        placeholder={currentQuestion.placeholder}
                        className="appearance-none rounded-xl relative block w-full px-6 py-4 border-2 border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-all duration-200"
                      />
                    ) : (
                      <input
                        type={currentQuestion.type}
                        value={currentQuestion.value}
                        onChange={(e) =>
                          currentQuestion.setValue(e.target.value)
                        }
                        onKeyPress={handleKeyPress}
                        placeholder={currentQuestion.placeholder}
                        className="appearance-none rounded-xl relative block w-full px-6 py-4 border-2 border-gray-200 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg transition-all duration-200"
                        required
                      />
                    )}
                  </motion.div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="flex justify-between items-center pt-4">
                  {step > 1 && (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-base text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
                    >
                      ← Back
                    </motion.button>
                  )}
                  <motion.button
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    type="button"
                    onClick={handleNext}
                    disabled={loading || !currentQuestion.value}
                    className="ml-auto px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {loading
                      ? "Submitting..."
                      : step === questions.length
                      ? "Submit"
                      : "Next →"}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center">
              <div className="flex space-x-3">
                {questions.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                      index + 1 === step ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
