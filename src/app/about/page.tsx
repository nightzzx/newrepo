"use client";

import * as React from "react";
import { Toaster, toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flex, Text } from "@radix-ui/themes";
import * as RadioGroup from "@radix-ui/react-radio-group";

export default function AboutPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        classNames={undefined}
      />

      <ModeToggle />

      {/* <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup> */}

      <Toaster expand={true} closeButton richColors position="top-center" />

      <Button
        onClick={() =>
          toast.success("Dear xx", {
            description: "Payment successful",
          })
        }
      >
        Give me a toast
      </Button>

      <Button
        onClick={() =>
          toast.error("Dear xx", {
            description: "Payment Fail",
          })
        }
      >
        Give me a fail toast
      </Button>

      <form>
        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          defaultValue="default"
          aria-label="View density"
        >
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="default"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r1"
            >
              Default
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="comfortable"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r2"
            >
              Comfortable
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="compact"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label
              className="text-white text-[15px] leading-none pl-[15px]"
              htmlFor="r3"
            >
              Compact
            </label>
          </div>
        </RadioGroup.Root>
      </form>
    </>
  );
}
