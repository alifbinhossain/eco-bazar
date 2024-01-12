import { Hero } from './_components/hero';
import { PopularCategories } from './_components/popular-categories';
import { PopularProducts } from './_components/popular-products';

export default function Home() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <PopularProducts />
    </>
  );
}
