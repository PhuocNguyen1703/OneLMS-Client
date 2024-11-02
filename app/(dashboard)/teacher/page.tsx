// const getTeacherData = async (): Promise<Teacher[]> => {
//   const res = await fetch(
//     "https://67105a60a85f4164ef2db344.mockapi.io/teacher1"
//   );
//   const data = await res.json();
//   return data;
// };

const TeacherPage = async () => {
  // const data = await getTeacherData();

  return (
    <section className="flex-1 p-4 m-4 mt-0 rounded-lg bg-gray-200">
      <h3 className="text-xl font-semibold">Teacher Data</h3>
      <span className="text-gray-500">Here&apos;s a list of teacher!</span>
      <div className="mt-4"></div>
    </section>
  );
};

export default TeacherPage;
