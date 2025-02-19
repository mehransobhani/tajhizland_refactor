export type DashboardResponse = {
    totalPrice: { date: string, value: number }[]
    totalCount: { date: string, value: number }[]
    newOrder: number;
    newOnHoldOrder: number;
    newComment: number;
    newUser: number;
};
