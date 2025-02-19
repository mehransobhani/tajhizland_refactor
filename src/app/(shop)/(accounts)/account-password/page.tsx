
import React from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Label from "@/shared/Label/Label";

const AccountPass = () => {
  return (
    <div className="space-y-10 sm:space-y-12  dark:text-white">
      {/* HEADING */}

      <div className=" max-w-xl space-y-6">
        <div>
          <Label>کلمه عبور فعلی</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>کلمه عبور جدید</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div>
          <Label>تکرار کلمه عبور</Label>
          <Input type="password" className="mt-1.5" />
        </div>
        <div className="pt-2">
          <ButtonPrimary>ویرایش</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountPass;
