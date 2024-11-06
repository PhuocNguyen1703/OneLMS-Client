import GuardianCard from "./GuardianCard";

export interface Guardian {
  id: string;
  name: string;
  cover: string;
  email: string;
  gender: string;
  occupation: string;
  phone: number;
  address: string;
  status: "Active" | "InActive";
}

const guardianList: Guardian[] = [
  {
    id: "G12345",
    name: "John Doe",
    cover:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "johndoe@example.com",
    gender: "Male",
    occupation: "Teacher",
    phone: 1234567890,
    address: "6506 Runte Square, East Shenita, AR 96772",
    status: "Active",
  },
  {
    id: "G12315",
    name: "Alice Smith",
    cover:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "alice@example.com",
    gender: "Female",
    occupation: "Teacher",
    phone: 1234567890,
    address: "123 Maple St, Springfield, USA",
    status: "Active",
  },
  {
    id: "G12375",
    name: "Bob Johnson",
    cover:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "bob@example.com",
    gender: "Male",
    occupation: "Engineer",
    phone: 9876543210,
    address: "456 Oak St, Springfield, USA",
    status: "InActive",
  },
  {
    id: "G12395",
    name: "Charlie Brown",
    cover:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "charlie@example.com",
    gender: "Non-binary",
    occupation: "Designer",
    phone: 5555555555,
    address: "789 Pine St, Springfield, USA",
    status: "Active",
  },
];

export const GuardianGrid = () => {
  return (
    <div className="space-y-3 h-full">
      {guardianList.map((guardian) => (
        <GuardianCard key={guardian.id} data={guardian} />
      ))}
    </div>
  );
};
