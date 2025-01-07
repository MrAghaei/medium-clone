"use client";
import { Input } from "@mui/base";
import { CiSearch } from "react-icons/ci";
import { InputAdornment } from "@mui/material";

function Header({ font }: { font: string }) {
  return (
    <div className={`${font} px-5 py-2`}>
      <div>
        <button className="text-2xl">Medium</button>
        <Input
          slotProps={{
            input: {
              className:
                "w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0",
            },
          }}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <CiSearch />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}

export default Header;
