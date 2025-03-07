type NoticeItem = {
  title: string;
  image: string;
  content: string;
  tag: string[];
  author: string;
  createdAt: string;
};

export const noticeList: NoticeItem[] = [
  {
    title: "New Feature Release: Dark Mode",
    image:
      "https://plus.unsplash.com/premium_photo-1676478746576-a3e1a9496c23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "We are excited to introduce dark mode for a better user experience!",
    tag: ["update", "feature"],
    author: "Admin",
    createdAt: "2025-02-24",
  },
  {
    title: "Scheduled Maintenance Notification",
    image:
      "https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `We are excited to introduce Dark Mode!  
      This feature allows you to switch to a darker theme, reducing eye strain and improving readability.  
      You can enable Dark Mode in the settings panel under the "Appearance" section.  
      Try it out and let us know your feedback!`,
    tag: ["maintenance", "alert"],
    author: "Tech Team",
    createdAt: "2025-02-20",
  },
  {
    title: "Security Update: Password Policy Change",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "We have updated our password policy to enhance security. Please review the new guidelines.",
    tag: ["security", "update"],
    author: "Security Team",
    createdAt: "2025-02-18",
  },
  {
    title: "Welcome to Our New Blog!",
    image:
      "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `To enhance security, we have updated our password policy.  
      From now on, all passwords must be at least **12 characters long** and contain a mix of uppercase, lowercase, numbers, and symbols.  
      This change will help protect your account from unauthorized access.  
      Please update your password if it does not meet the new criteria.`,
    tag: ["announcement"],
    author: "Editor",
    createdAt: "2025-02-15",
  },
  {
    title: "User Survey: Share Your Feedback",
    image:
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Help us improve by participating in our short user experience survey.",
    tag: ["survey", "feedback"],
    author: "Customer Support",
    createdAt: "2025-02-12",
  },
];
