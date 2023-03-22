import NewChat from "./NewChat";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* newChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
