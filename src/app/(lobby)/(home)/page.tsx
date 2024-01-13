import { DiscountBanner } from './_components/discount-banner';
import { FeatureProducts } from './_components/feature-products';
import { Hero } from './_components/hero';
import { HotDeals } from './_components/hot-deals';
import { NewsLetter } from './_components/news-letter';
import { OrganicStore } from './_components/organic-store';
import { PopularCategories } from './_components/popular-categories';
import { PopularProducts } from './_components/popular-products';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <PopularProducts />
      <OrganicStore />
      <HotDeals />
      <DiscountBanner />
      <FeatureProducts />
      <NewsLetter />
    </>
  );
}
