import CareerGraph from "@/components/CareerGraph";
import ConversationBubble from "@/components/ConversationBubble";

export default function Page() {
  return (
    <div className='relative'>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed z-0 bg-no-repeat absolute top-0 left-0 right-0 bottom-0"
        style={{ backgroundImage: "url('/background.png')", backgroundAttachment: "fixed" }}
      />
      <CareerGraph />
      <ConversationBubble className="absolute left-0 top-0 z-50 pointer-events-none" />
    </div>
  );
}
