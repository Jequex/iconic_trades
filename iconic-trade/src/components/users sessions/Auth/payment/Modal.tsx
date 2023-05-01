import { useContext } from "react";
// import { investmentLaps } from "@/redux/features/packageSlice";
// import { useAppDispatch } from "@/redux/store";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import TextField from "@/components/ui/TextField";
import { paystackApi } from "@/components/utils/utils";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";

import subContext from "@/context/subscriptions/subContext";

type Props = {
  handleStep: () => void;
  steps: number;
};

function Modal({ steps, handleStep }: Props) {
  const [planChange, setChangeplan] = useState("");

  const SubContext = useContext(subContext);
  const { verifyPayment } = SubContext;

  const handlePlanChange = (selectedValue: string) => {
    setChangeplan(selectedValue);
  };

  // formik initialValues
  const initialValues = {
    amount: "",
    plan: "",
  };

  // PAYSTACK
  interface FormValues {
    plan: string;
    amount: string;
  }

  type PaymentReference = {
    reference: string;
    trans: string;
    status: string;
    message: string;
    transaction: string;
  };

  // state
  const [formValues, setformValues] = useState<FormValues>({
    plan: "",
    amount: "",
  });

  const newAmount = parseInt(formValues.amount);
  // console.log(amount);
  const config = {
    reference: `${new Date().getTime()}`,
    email: "user@example.com",
    amount: newAmount,  
    publicKey: paystackApi,

    metadata: {
      plan: formValues.plan,
      custom_fields:[
        {
          display_name:"plan",
          variable_name:"plan",
          value:formValues.plan
        }]
    },
  };

  useEffect(() => {
    initializePayment(
      () => {
        verifyPayment(config)
      },
      () => console.log("failed")
    );
    // eslint-disable-next-line
  }, [formValues.amount]);

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="flex">
      <div className="">
        <div className=" w-full mb-4 ">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              setformValues(values);
            }}
          >
            {() => {
              return (
                <Form className="w-full max-w max-w-lg ">
                  {steps === 1 && (
                    <>
                      <div className="my-4 ">
                        <div className="relative z-0 w-full mb-4 group ">
                          <Field
                            name="amount"
                            label="Enter an Amount"
                            as={TextField}
                          />
                        </div>
                      </div>
                      <Button
                        type="button"
                        className="w-full"
                        onClick={handleStep}
                      >
                        Continue
                      </Button>
                    </>
                  )}
                  {steps === 2 && (
                    <>
                      <Field as="select" name="plan">
                        {({ field, form }: any) => {
                          return (
                            <>
                              <div className="flex flex-col my-4 space-y-1.5">
                                <Label htmlFor="name">Choose a plan</Label>
                                <Select
                                  value={field.value}
                                  defaultValue={field.value}
                                  onValueChange={(selectedValue) => {
                                    handlePlanChange(selectedValue);
                                    form.setFieldValue(
                                      field.name,
                                      selectedValue
                                    );
                                  }}
                                >
                                  <SelectTrigger>
                                    <SelectValue
                                      className="text-slate-200"
                                      placeholder="Choose a plan"
                                    />
                                    <SelectContent position="popper">
                                      <SelectItem value="3 months">
                                        Three Months
                                      </SelectItem>
                                      <SelectItem value="6 months">
                                        Six Months
                                      </SelectItem>
                                      <SelectItem value="9 months">
                                        Nine Months
                                      </SelectItem>
                                    </SelectContent>
                                  </SelectTrigger>
                                </Select>
                              </div>
                            </>
                          );
                        }}
                      </Field>
                      {/* submit btn */}
                      <Button
                        className="w-full"
                        type="submit"
                        // onClick={() => {
                        //   initializePayment();
                        // }}
                      >
                        Proceed
                        <svg
                          className="w-4 h-4 ml-2"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Button>
                    </>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <p className="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
            Check your transaction history in your{" "}
            <Link
              href="#"
              className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline mr-1"
            >
              iconicTrade dashboard.
            </Link>
            Bank transfers generally take 10 minutes to complete. If you are not
            creadited after 24 hours, please contact your bank
          </p>
        </div>
      </div>
      <div className="items-center justify-center w-96 h-full hidden md:flex ">
        <div className="-rotate-45 select-none">
          <h3 className="text-slate-800 text-6xl font-extrabold mb-3 ">
            {planChange === "3-m"
              ? "8%"
              : planChange === "6-m"
              ? "12%"
              : planChange === "9-m"
              ? "18%"
              : steps === 1
              ? null
              : "???"}
          </h3>
          <p className="text-slate-700 text-lg font-normal max-w-[12rem] ">
            {planChange === "3-m"
              ? "return on investment after three months"
              : planChange === "6-m"
              ? "return on investment after six months"
              : planChange === "9-m"
              ? "return on investment after nine months"
              : steps === 1
              ? null
              : "???"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
