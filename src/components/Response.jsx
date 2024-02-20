import React from "react";

import hljs from "highlight.js";

function Response(Api) {
  console.log(Api.api);
  return (
    <div className="max-w-full border-t border-t-stone-300 mt-8 p-4">
      <h3 className="font-bold text-2xl mb-5">Response</h3>
      {Api.api && (
        <div>{hljs.highlight(`${Api.api}`, { language: "json" }).value}</div>
      )}
    </div>
  );
}

export default Response;
