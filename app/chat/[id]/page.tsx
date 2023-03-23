import Chat from "@/app/components/Chat";
import ChatInput from "@/app/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat id={id} />

      <ChatInput id={id} />
    </div>
  );
};

export default ChatPage;
