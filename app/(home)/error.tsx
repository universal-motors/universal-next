"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div>
        <h3>Something went wrong!</h3>
        <button onClick={() => reset()}> Try Again </button>
      </div>
    </>
  );
}
