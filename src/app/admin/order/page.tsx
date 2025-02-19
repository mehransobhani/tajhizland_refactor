"use client";
import Breadcrump from "@/components/Breadcrumb/Breadcrump";
import Panel from "@/shared/Panel/Panel";
import PageTitle from "@/shared/PageTitle/PageTitle";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import PageLink from "@/shared/PageLink/PageLink";
import Link from "next/link";
import DataTable from "@/shared/DataTable/DataTable";
import {buttons, columns} from "@/app/admin/order/TableRow";
import {updateStatus} from "@/services/api/admin/order";
import {OrderResponse} from "@/services/types/order";
import {toast} from "react-hot-toast";

export default function Page() {

    async function changeStatus(e: OrderResponse) {
        let response = await updateStatus({
            id: e.id,
            status: e.status
        })
        toast.success(response?.message as string);
    }

    return (<>
        <Breadcrump breadcrumb={[
            {
                title: "سفارشات",
                href: "order"
            }
        ]}/>
        <Panel>
            <PageTitle>
                مدیریت سفارشات
            </PageTitle>

            <DataTable
                onEdit={changeStatus}
                apiUrl={"admin/order/dataTable"}
                columns={columns}
                buttons={buttons}
            />
        </Panel>
    </>)
}
