"use client"
import Breadcrump from "@/components/Breadcrumb/Breadcrump";
import Panel from "@/shared/Panel/Panel";
import PageTitle from "@/shared/PageTitle/PageTitle";
import Form from "@/app/admin/slider/Form";
import {store} from "@/services/api/admin/slider";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    async function submit(e: FormData) {
        let response = await store(
            {
                title: e.get("title") as string,
                url: e.get("url") as string,
                status: e.get("status") as string,
                type: e.get("type") as string,
                image: e.get("image") as File,
            }
        )
        toast.success(response?.message as string)
        router.push("/admin/slider");

    }

    return (<>
        <Breadcrump breadcrumb={[
            {
                title: "اسلایدر",
                href: "slider"
            },
            {
                title: "افزودن اسلایدر",
                href: "slider/create"
            }
        ]}/>
        <Panel>
            <PageTitle>
                افزودن اسلایدر
            </PageTitle>
            <div>
                <Form submit={submit}/>
            </div>
        </Panel>
    </>)
}
