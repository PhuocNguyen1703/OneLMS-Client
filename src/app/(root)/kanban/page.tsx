import BoardList from "@/features/kanban/components/BoardList";
import Header from "@/features/kanban/components/Header";

const Kanban = () => {
  return (
    <section className="relative">
      <Header />
      <BoardList />
    </section>
  );
};

export default Kanban;
