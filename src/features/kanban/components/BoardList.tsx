import BoardCard from "./Board";

const Boards = [
  {
    id: "HC0189",
    status: "Over Time",
    title:
      "Đây là một đoạn text rất dài, dài đến mức bạn sẽ muốn nó chỉ hiển thị ba dòng đầu tiên thôi, phần còn lại sẽ bị cắt bớt và thêm dấu ở cuối.",
    startDate: "27 Oct, 9:00am",
    endDate: "31 Oct, 9:00am",
    avatar: "",
    owner: "Darlene Fox",
    role: "Admin",
  },
  {
    id: "HC0329",
    status: "Over Time",
    title:
      "Đây là một đoạn text rất dài, dài đến mức bạn sẽ muốn nó chỉ hiển thị ba dòng đầu tiên thôi, phần còn lại sẽ bị cắt bớt và thêm dấu ở cuối.",
    startDate: "27 Oct, 9:00am",
    endDate: "31 Oct, 9:00am",
    avatar: "",
    owner: "Darlene Fox",
    role: "Admin",
  },
  {
    id: "HC1189",
    status: "Over Time",
    title:
      "Đây là một đoạn text rất dài, dài đến mức bạn sẽ muốn nó chỉ hiển thị ba dòng đầu tiên thôi, phần còn lại sẽ bị cắt bớt và thêm dấu ở cuối.",
    startDate: "27 Oct, 9:00am",
    endDate: "31 Oct, 9:00am",
    avatar: "",
    owner: "Darlene Fox",
    role: "Admin",
  },
  {
    id: "HC0188",
    status: "Over Time",
    title:
      "Đây là một đoạn text rất dài, dài đến mức bạn sẽ muốn nó chỉ hiển thị ba dòng đầu tiên thôi, phần còn lại sẽ bị cắt bớt và thêm dấu ở cuối.",
    startDate: "27 Oct, 9:00am",
    endDate: "31 Oct, 9:00am",
    avatar: "",
    owner: "Darlene Fox",
    role: "Admin",
  },
];

const BoardList = () => {
  const board = {
    id: "HC0189",
    status: "Over Time",
    title:
      "Đây là một đoạn text rất dài, dài đến mức bạn sẽ muốn nó chỉ hiển thị ba dòng đầu tiên thôi, phần còn lại sẽ bị cắt bớt và thêm dấu ở cuối.",
    startDate: "27 Oct, 9:00am",
    endDate: "31 Oct, 9:00am",
    avatar: "",
    owner: "Darlene Fox",
    role: "Admin",
  };

  return (
    <section className="grid grow grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-5 pt-0">
      {Boards.map((board) => (
        <BoardCard {...board} key={board.id} />
      ))}
    </section>
  );
};

export default BoardList;
