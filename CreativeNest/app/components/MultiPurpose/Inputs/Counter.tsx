"use client";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
};

export const Counter: React.FC<CounterProps> = ({
  onChange,
  subtitle,
  title,
  value,
}) => {
  const onAdd = React.useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);
  const onReduce = React.useCallback(() => {
    if (value > 1) {
      onChange(value - 1);
    }
  }, [value, onChange]);
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className=" flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition w-10 h-10 rounded-full border-[1px] border-neutral-400 "
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className=" flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition w-10 h-10 rounded-full border-[1px] border-neutral-400 "
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};
