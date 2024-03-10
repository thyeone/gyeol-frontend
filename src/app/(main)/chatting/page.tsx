import { Header } from '@/components/Header';
import BottomTabs from '@/components/Tabs/BottomTabs';

export default function Chatting() {
  return (
    <div>
      <Header>
        <Header.TextHeader>채팅</Header.TextHeader>
      </Header>
      <h1>Chatting</h1>
      <BottomTabs />
    </div>
  );
}
