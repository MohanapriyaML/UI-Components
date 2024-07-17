"use client"
import React from "react";
import CheckComponents from "../ruf/Check";
import TestComponent from "../ruf/Ruff";
import Dropdown from "../testing/dropdown";
import Forms from "../testing/forms";
import ImageComponenet from "../testing/image";
import SelectComponent from "../testing/select";
import Drawer from "../testing/drawer";
import Popover from "../testing/popover";
import Link from "../testing/link";

export default function Home() {
  return (
       <>
       <TestComponent />
        <CheckComponents />
        <Drawer/>
        <Dropdown/>
        <ImageComponenet />
        <Link />
        <Popover />
        <SelectComponent/>
        <Forms/>
       </>
  );
}
