import { useContext, useEffect } from "react";
import LogLayout from "@/components/layout/LogLayout";
import TextField from "@/components/ui/TextField";
import { Formik, Form, Field } from "formik";
import Router from "next/router";
import { signIn } from "next-auth/react";

import AuthContext from "@/context/auth/authContext";

interface HomeProps {}
type FormValues = {
  email: string;
  password: string;
};

const Home = () => {
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated } = authContext;
  const initialValues = { email: "", password: "" };
  
  useEffect(() => {
      if (isAuthenticated) {
          Router.push('/dashboard')
      }

    if (error === 'invalid credentials') {
        //
    }
    
      // eslint-disable-next-line
  }, [ error, isAuthenticated ])

  const handleFormSubmit = async (formValues: any) => {
    try {
      
      login(formValues)

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
      >
        {() => {
          return (
            <Form className="w-full  ">
              <div className="my-7">
                <div className="grid grid-cols-2 gap-x-4">
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
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign me in
              </button>
            </Form>
          );
        }}
      </Formik>
    </LogLayout>
  );
};

export default Home;
