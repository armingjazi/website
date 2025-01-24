import React from "react";
import SwitchModes, { Modes } from "@/components/SwitchModes";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const mode = (await searchParams).mode as Modes | undefined;
  return <SwitchModes mode={mode as Modes} />;
}
