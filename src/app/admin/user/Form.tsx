"use client"
import Label from "@/shared/Label/Label";
import Input from "@/shared/Input/Input";
import Select from "@/shared/Select/Select";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import React from "react";
import {UserResponse} from "@/services/types/user";

interface Form {
    data?: UserResponse;
    submit: (e: FormData) => void;
}

export default function Form({ data, submit  }: Form) {

    return (<>
        <form action={submit} method={"post"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
                <div>
                    <Label>نام کاربر</Label>
                    <Input name={"name"} defaultValue={data?.name}/>
                </div>
                <div>
                    <Label>نام کاربری</Label>
                    <Input name={"username"} defaultValue={data?.username}/>
                </div>
                <div>
                    <Label>جنسیت</Label>
                    <Select name={"gender"} >
                        <option value={1} selected={data?.gender==1}>مرد</option>
                        <option value={0}  selected={data?.gender==0}>زن</option>
                    </Select>
                </div>
                <div>
                    <Label>ایمیل</Label>
                    <Input name={"email"} defaultValue={data?.email}/>
                </div>
                <div>
                    <Label>نقش کاربر</Label>
                    <Select name={"role"}>
                        <option value={"user"} selected={data?.role == "user"}>
                            کاربر
                        </option>
                        <option value={"admin"} selected={data?.role == "admin"}>
                            مدیر
                        </option>
                    </Select>
                </div>

            </div>

            <hr className={"my-5"}/>
            <div className={"flex justify-center my-5"}>
                <ButtonPrimary type={"submit"}>
                    ذخیره
                </ButtonPrimary>
            </div>
        </form>
    </>)
}
