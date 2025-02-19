import {ConceptResponse} from "@/services/types/concept";
import {SliderResponse} from "@/services/types/slider";
import {SpecialProductResponse} from "@/services/types/specialProduct";
import {HomepageCategoryResponse} from "@/services/types/homepageCategory";
import {PopularCategoryResponse} from "@/services/types/popularCategory";
import {PopularProductResponse} from "@/services/types/popularProduct";
import {BrandResponse} from "@/services/types/brand";
import {NewsResponse} from "@/services/types/news";
import {BannerResponse} from "@/services/types/banner";
import {VlogResponse} from "@/services/types/vlog";
import {PosterResponse} from "@/services/types/poster";

export type HomePageResponse = {
    popularProducts: { data: PopularProductResponse[] };
    banners: { data: BannerResponse[] };
    banners2: { data: BannerResponse[] };
    banners3: { data: BannerResponse[] };
    banners4: { data: BannerResponse[] };
    homepageCategories: { data: HomepageCategoryResponse[] };
    desktopSliders: { data: SliderResponse[] };
    mobileSliders: { data: SliderResponse[] };
    brands: { data: BrandResponse[] };
    news: { data: NewsResponse[] };
    vlogs: { data: VlogResponse[] };
    posters: { data: PosterResponse[] };
    concepts: { data: ConceptResponse[] };
    specialProducts: { data: SpecialProductResponse[] };
};
