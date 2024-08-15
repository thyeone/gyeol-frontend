'use client';

import Link from 'next/link';

import { useGetFeedList } from '@/apis/feed';
import { TabProvider } from '@/components/TabBar';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import FeedFilterBar from './components/FeedFilterBar';
import FeedHeader from './components/FeedHeader';
import FeedItem from './components/FeedItem';
import FeedTabs from './components/FeedTabs';

export default function Feed() {
  const { data: feedList } = useGetFeedList();

  return (
    <TabProvider initialValue="recommend">
      <FeedHeader />
      <FeedTabs />
      <FeedFilterBar />
      <ul className="mb-[60px]">
        {feedList?.map(({ id, contents, images }) => (
          <Link key={id} href={`/feed/detail/${id}`}>
            <li>
              <FeedItem
                id={id}
                className="border-b border-gray-200 py-5"
                contents={contents}
                images={images}
              />
            </li>
          </Link>
        ))}
      </ul>
      <BottomTabBar />
    </TabProvider>
  );
}
