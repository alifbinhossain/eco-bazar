import Image from 'next/image';
import Link from 'next/link';

interface Props {
  category: IPopularCategory;
}

export const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <Link
      href={'/'}
      className=' group border hover:border-primary-dark hover:shadow-2 rounded bg-white p-4 pb-6 flex flex-col items-center gap-4 transition-all duration-200 ease-in'
    >
      <Image
        width={190}
        height={130}
        src={category.image}
        alt={category.name}
      />
      <h6 className='text-lg font-medium text-gray-900  group-hover:text-primary-dark'>
        {category.name}
      </h6>
    </Link>
  );
};
