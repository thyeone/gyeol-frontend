import Spacing from '@/components/Spacing';
import { cn } from '@/utils/cn';
import { useMoodContext } from '../../../components/MoodContext';
import RegionIcon from '@/assets/Region';
import RightArrowIcon from '@/assets/RightArrow';
import useOverlay from '@/hooks/useOverlay';
import PostCodePopup from './PostCodePopup';
import { useWatch } from 'react-hook-form';
import { cutAddress } from '@/utils';
import CheckIcon from '@public/svg/check-16.svg';
import SectionLabel from './SectionLabel';

export default function RegionSection() {
  const useForm = useMoodContext();
  const { control } = useForm;
  const { open } = useOverlay();

  const address = useWatch({
    control,
    name: 'address',
  });

  return (
    <>
      <SectionLabel label="거주 지역" isCheck={!!address.roadAddress} />
      <div className="flex gap-x-2">
        <button
          className={cn(`h-[52px] w-full rounded-xl bg-gray-50 dark:bg-gray-800`)}
          onClick={() => open(({ exit }) => <PostCodePopup onClose={exit} useForm={useForm} />)}
        >
          <span className="mx-4 flex items-center justify-between gap-x-2 text-sm text-gray-700 dark:text-white">
            <div className="flex items-center gap-x-2">
              <RegionIcon />
              {address.roadAddress
                ? cutAddress(address.roadAddress)
                : '거주하시는 위치를 선택해주세요.'}
            </div>
            <RightArrowIcon />
          </span>
        </button>
      </div>
      <Spacing size={32} />
    </>
  );
}
