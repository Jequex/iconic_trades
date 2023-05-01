import React from "react";

type Props = {};

function Panel({}: Props) {
  return (
    <div className="w-full rounded-md  overflow-hidden border border-slate-700">
      <div className="bg-slate-700 py-2">
        <h3 className="text-4xl text-slate-200 text-center font-bold">20</h3>
      </div>
      <div className="bg-slate-800">
        <p className="text-slate-300 uppercase text-sm text-center py-1">
          days
        </p>
      </div>
    </div>
  );
}

export default Panel;
