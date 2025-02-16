import GuardianCard from "./GuardianCard";

export const GuardianGrid = ({ data }: any) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 pb-4">
      {data.map((guardian: any) => (
        <GuardianCard key={guardian.id} data={guardian} />
      ))}
    </div>
  );
};
