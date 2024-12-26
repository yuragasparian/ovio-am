import React from "react";

export default function Logo() {
  return (
    <img onClick={() => open("/", "_self")}
    className="h-full w-40 mr-5 cursor-pointer"
      src="https://ovio.am/storage/uploads/logo/WR6F8UuyxCBldK0hgnfigpx72VT9YAQLfzWamCdI.svg"
      alt="OVIO"
    />
  );
}
