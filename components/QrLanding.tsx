"use client";

import { useSyncExternalStore } from "react";
import { PlayStoreButton } from "./ui";

const subscribe = () => () => {};
// A sensor QR sticker opens /iot-hub?<device and code>, so any query string means "came from a scan".
const cameFromScan = () => window.location.search.length > 1;

/** Shown above everything else when the page is opened from a sensor QR sticker. The query values are never displayed. */
export function QrLanding() {
  const scanned = useSyncExternalStore(subscribe, cameFromScan, () => false);
  if (!scanned) return null;

  return (
    <section id="scanned" aria-live="polite" className="border-b border-blue-200 bg-blue-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">Sensor QR code scanned</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Open the ASTRA IoT Hub app to add this sensor</h2>
          <p className="mt-2 text-slate-600">
            Your phone camera opened this page, but sensors are added inside the app. Install the ASTRA IoT Hub app from Google Play,
            then scan the QR code on the sensor from within the app.
          </p>
        </div>
        <div className="shrink-0"><PlayStoreButton /></div>
      </div>
    </section>
  );
}
