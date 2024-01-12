import { getSocialIcon } from '@/lib/utils';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import { Button } from './ui/button';

const SocialPlatforms: Record<ISocialPlatform, any> = {
  facebook: FacebookShareButton,
  whatsapp: WhatsappShareButton,
};

interface SharePostProps {
  url: string;
  platforms: ISocialPlatform[];
}

export const SharePost: React.FC<SharePostProps> = ({ platforms, url }) => {
  return (
    <div className='flex items-center gap-1'>
      {platforms.map((platform) => {
        const Component = SocialPlatforms[platform];
        const SocialIcon = getSocialIcon(platform);
        return (
          <Component key={platform} url={url}>
            <Button
              variant={'ghost'}
              size={'icon'}
              className='text-gray-700 rounded-full '
            >
              <SocialIcon size={20} />
            </Button>
          </Component>
        );
      })}
    </div>
  );
};
