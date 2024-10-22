"use client";
import React from "react";
import Link from "next/link";

function ErrorPage({ statusCode }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>
        {statusCode === 404
          ? "The page you were looking for was not found."
          : "Something went wrong. Please try again later."}
      </p>
      <Link href="/">
        <a>Go back to the homepage</a>
      </Link>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
