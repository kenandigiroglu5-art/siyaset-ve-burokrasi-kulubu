"use client";
import dynamic from "next/dynamic";

// Wrapped so it can be dynamically imported (ssr:false) from the Server
// Component root layout — same cursor, loaded in a separate chunk so it
// doesn't add to the critical initial-hydration bundle on every page.
const CustomCursor = dynamic(() => import("@/components/common/CustomCursor"), { ssr: false });

export default CustomCursor;
