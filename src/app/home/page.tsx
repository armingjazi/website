import React from "react";
import SwitchModes from "@/components/SwitchModes";

export default function Page() {
  return (
    <div className='relative'>
      <div
        className="h-full bg-cover bg-center bg-fixed z-[-1] bg-no-repeat top-0 left-0 right-0 fixed"
        style={{ backgroundImage: "url('/background.png')", backgroundAttachment: "fixed" }}
      />
      <SwitchModes />
    </div>
  );
}
