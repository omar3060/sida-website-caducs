"use client";
import dynamic from "next/dynamic";

const MotionDash = dynamic(() => import("./MotionDash"), { ssr: false });

const ClientDashWrapper = ({ className }) => {
  return <MotionDash className={className} />;
};

export default ClientDashWrapper;
