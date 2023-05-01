import { useContext, useEffect } from "react";
import LogLayout from "@/components/layout/LogLayout";
import TextField from "@/components/ui/TextField";
import validationSchema from "@/components/utils/validationSchema";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

import AuthContext from "@/context/auth/authContext";

interface HomeProps {}

const Home = () => {
  const authContext = useContext(AuthContext);

  const { register, error, isAuthenticated } = authContext;

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  
  useEffect(() => {
      if (isAuthenticated) {
          Router.push('/dashboard')
      }

    if (error === 'invalid credentials') {
        //
      }
      //eslint-disable-next-line
  }, [ error, isAuthenticated ])


  const handleFormSubmit = async (formValues: any) => {
    try {
      register(formValues)
      
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <LogLayout>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleFormSubmit(values);
          resetForm();
        }}
        // validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form className="w-full  ">
              <div className="my-7">
                <div className="grid grid-cols-2 gap-x-4">
                  <div className="relative z-0 w-full mb-4 group col-span-full md:col-span-1">
                    <Field name="firstName" label="First name" as={TextField} />
                  </div>
                  <div className="relative z-0 w-full mb-4 group col-span-full md:col-span-1">
                    <Field name="lastName" label="Last name" as={TextField} />
                  </div>
                  <div className="relative z-0 w-full mb-4 group col-span-full">
                    <Field name="email" label="E-mail" as={TextField} />
                  </div>
                  <div className="relative z-0 w-full mb-4 group col-span-full">
                    <Field name="password" label="Password" as={TextField} />
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the
                    <Link
                      href="/terms-and-conditions"
                      className="text-blue-600 ml-1 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
            </Form>
          );
        }}
      </Formik>
    </LogLayout>
  );
};

export default Home;
