import React, { useEffect, useContext } from "react";
import Panel from "./Panel";
import { useAppSelector } from "@/redux/store";
import Router from "next/router";
import Link from "next/link";

import { subscriptionType } from "@/types/subscriptions"

import { formatDate, formatAmount } from "@/utils/functions"

import subContext from "@/context/subscriptions/subContext";
import authContext from "@/context/auth/authContext";


type Props = {};

function Overview({ }: Props) {
  const SubContext = useContext(subContext);
  const AuthContext = useContext(authContext);

  const { loadUser, isAuthenticated } = AuthContext;
  const { getSubscriptions, subscriptions } = SubContext;

  useEffect(() => {
    loadUser()
    if (isAuthenticated) {
      getSubscriptions();
    } else {
      Router.push('/sign-in');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const [remainingTime, setRemainingTime] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { date } = useAppSelector((store) => {
    return store.packageReducer;
  });

  const currentTimestamp = Date.now();
  const millisecondsIn30Days = date * 24 * 60 * 60 * 1000;
  const timestampInDays = currentTimestamp + millisecondsIn30Days;

  useEffect(() => {
    // formatter function
    function formatTimestamp(timestamp: number) {
      const date = new Date(timestamp);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");
      const seconds = String(date.getUTCSeconds()).padStart(2, "0");
      const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    }

    const timestamp = timestampInDays;
    const formatted = formatTimestamp(timestamp);
    const targetDate = new Date(formatted);

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="py-5 w-full">
      {subscriptions ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th>S/n</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Reference</th>
                <th>Bank</th>
                <th>Amount</th>
                <th>Channel</th>
                <th>Type</th>
                <th>Start Date</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub: subscriptionType, i: number) => <tr key={i}>
                <td>{ i + 1 }</td>
                <td>{ sub.plan }</td>
                <td>{ sub.status }</td>
                <td>{ sub.reference }</td>
                <td>{ sub.bank }</td>
                <td>{ sub.currency } { `${formatAmount(sub.amount)}` }</td>
                <td>{ sub.channel }</td>
                <td>{ sub.card_type }</td>
                <td>{ formatDate(sub.created_at) }</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      ) : date === 0 ? (
        <div className="text-white">
          <p className="max-w-lg mb-6 text-sm text-slate-400">
            You are yet to activate a plan. Go to
            <Link
              href="/"
              className="text-blue-600 underline ml-1 font-medium dark:text-blue-500 hover:no-underline mr-1"
            >
              iconicTrade Home
            </Link>
            and choose a plan
          </p>
        </div>
      ) : (
        <>
          <div className="pb-3">
            <h1 className="font-bold text-lg text-slate-200 capitalize pb-3">
              Cash Drop{" "}
            </h1>
            <p className="text-sm text-slate-300">
              Count down to your next investment payout. Get ready to celebrate
              the arrival of your profit
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 max-w-lg">
            {/* day */}
            <div className="w-full rounded-md  overflow-hidden border border-slate-700">
              <div className="bg-slate-700 py-2">
                <h3 className="text-4xl text-slate-200 text-center font-bold">
                  {remainingTime.days}
                </h3>
              </div>
              <div className="bg-slate-800">
                <p className="text-slate-300 uppercase text-sm text-center py-1">
                  days
                </p>
              </div>
            </div>
            {/* hours */}
            <div className="w-full rounded-md  overflow-hidden border border-slate-700">
              <div className="bg-slate-700 py-2">
                <h3 className="text-4xl text-slate-200 text-center font-bold">
                  {remainingTime.hours}
                </h3>
              </div>
              <div className="bg-slate-800">
                <p className="text-slate-300 uppercase text-sm text-center py-1">
                  hours
                </p>
              </div>
            </div>
            {/* mins */}
            <div className="w-full rounded-md  overflow-hidden border border-slate-700">
              <div className="bg-slate-700 py-2">
                <h3 className="text-4xl text-slate-200 text-center font-bold">
                  {remainingTime.minutes}
                </h3>
              </div>
              <div className="bg-slate-800">
                <p className="text-slate-300 uppercase text-sm text-center py-1">
                  mins
                </p>
              </div>
            </div>
            {/* sec */}
            <div className="w-full rounded-md  overflow-hidden border border-slate-700">
              <div className="bg-slate-700 py-2">
                <h3 className="text-4xl text-slate-200 text-center font-bold">
                  {remainingTime.seconds}
                </h3>
              </div>
              <div className="bg-slate-800">
                <p className="text-slate-300 uppercase text-sm text-center py-1">
                  seconds
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Overview;
