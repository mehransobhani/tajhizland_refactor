import {ProductResponse} from "@/services/types/product";
import {CategoryResponse} from "@/services/types/category";
import {LandingBannerResponse} from "@/services/types/landingBanner";

export type LandingResponse = {
    id: number;
    title: string;
    description: string;
    url: string;
    status: string;
    created_at: string;
    updated_at: string;
    product?: { data: ProductResponse[] };
    category?: { data: CategoryResponse[] };
    landingBannerImage?: { data: LandingBannerResponse[] };
    landingBannerSlider?: { data: LandingBannerResponse[] };
};
