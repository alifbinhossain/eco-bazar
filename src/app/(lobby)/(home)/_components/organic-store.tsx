import Image from 'next/image';

export const OrganicStore = () => {
  return (
    <section className='py-24'>
      <div className='container flex items-center gap-12'>
        <div>
          <Image
            width={809}
            height={513}
            src={'/assets/images/organic-store-banner.png'}
            alt='Organic Store Banner'
          />
        </div>

        <div className='flex-1'>
          <h2 className='text-[2.5rem]'>
            100% Trusted <br />
            Organic Food Store
          </h2>

          <ul className='mt-6 space-y-6'>
            <li className='flex gap-3'>
              <div className='h-6 w-6 rounded-full bg-primary flex items-center justify-center'>
                <Image
                  width={12}
                  height={12}
                  src={'/assets/images/icons/check-white.svg'}
                  alt='Check Icon'
                />
              </div>

              <div className='flex-1 space-y-2'>
                <h4 className='text-lg font-medium text-gray-900'>
                  Every day fresh and quality products for you
                </h4>
                <p className='text-sm font-normal text-gray-500'>
                  Ut quis tempus erat. Phasellus euismod bibendum magna non
                  tristique. Pellentesque semper vestibulum elit sed
                  condimentum. Nunc pretium fermentum interdum.{' '}
                </p>
              </div>
            </li>

            <li className='flex gap-3'>
              <div className='h-6 w-6 rounded-full bg-primary flex items-center justify-center'>
                <Image
                  width={12}
                  height={12}
                  src={'/assets/images/icons/check-white.svg'}
                  alt='Check Icon'
                />
              </div>

              <div className='flex-1 space-y-2'>
                <h4 className='text-lg font-medium text-gray-900'>
                  Healthy & natural food for lovers of healthy food
                </h4>
                <p className='text-sm font-normal text-gray-500'>
                  Ut quis tempus erat. Phasellus euismod bibendum magna non
                  tristique. Pellentesque semper vestibulum elit sed
                  condimentum. Nunc pretium fermentum interdum.{' '}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
