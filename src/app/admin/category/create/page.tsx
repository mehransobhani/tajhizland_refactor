"use client"
import Breadcrump from "@/components/Breadcrumb/Breadcrump";
import Panel from "@/shared/Panel/Panel";
import PageTitle from "@/shared/PageTitle/PageTitle";
import toast from "react-hot-toast";
import Form from "@/app/admin/category/Form";
import {store} from "@/services/api/admin/category";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    async function submit(e: FormData) {
        let response = await store(
            {
                name: e.get("name") as string,
                url: e.get("url") as string,
                status: e.get("status") as string,
                description: e.get("description") as string,
                image: e.get("image") as File,
                parent_id: e.get("parent_id") as string,
                type: e.get("type") as string
            }
        )
        toast.success(response?.message as string)
        router.push("/admin/category");

    }

    return (<>
        <Breadcrump breadcrumb={[
            {
                title: "دسته‌بندی",
                href: "category"
            },
            {
                title: "افزودن دسته‌بندی جدید",
                href: "category/create"
            }
        ]}/>
        <Panel>
            <PageTitle>
                ایجاد دسته‌بندی جدید
            </PageTitle>
            <div>
                <Form submit={submit}/>
            </div>
        </Panel>

    </>)
}
