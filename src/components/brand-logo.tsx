import Image from 'next/image';
import Link from 'next/link';

export const BrandLogo = () => {
  return (
    <Link href={'/'}>
      <Image
        height={38}
        width={184}
        src={'/assets/images/brand-logo.svg'}
        alt='Brand Logo'
      />
    </Link>
  );
};
