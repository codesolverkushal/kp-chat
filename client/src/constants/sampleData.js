export const sampleChats = [
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "4",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "5",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "6",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "7",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "8",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "9",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "10",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "11",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "12",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "13",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "14",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "15",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["/images/avatar1.png"],
    name: "John Boi",
    _id: "16",
    groupChat: false,
    members: ["1", "2"],
  },
];
export const sampleUsers = [
  {
    // Use the relative path from your project’s source directory to where the image is stored
    avatar: ["/images/avatar1.png"],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: ["/images/avatar1.png"],
    name: "John Boi",
    _id: "2",
  },
];
export const sampleNotifications = [
  {
    // Use the relative path from your project’s source directory to where the image is stored
    sender: {
      avatar: ["/images/avatar1.png"],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["/images/avatar1.png"],
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "img12345",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Hey there! How's it going?",
    _id: "msg1",
    sender: {
      _id: "user1",
      name: "John Doe",
    },
    chat: "chat123",
    createdAt: "2024-08-14T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "img67890",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "All good here! What about you?",
    _id: "msg2",
    sender: {
      _id: "sdfsdfsdf",
      name: "Jane Smith",
    },
    chat: "chat123",
    createdAt: "2024-08-14T10:42:15.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 25,
      groups: 3,
    },
  ],

  chats: [
    {
      name: "LabadBass Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Tech Talk",
      avatar: ["https://www.w3schools.com/howto/img_avatar2.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 3,
      totalMessages: 15,
      creator: {
        name: "Jane Smith",
        avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      },
    },
  ],

  messages:[
    {
        attachments: [],
        content: "Luda ka Message hai",
        _id: "sfnsdjkfsdnfksjbnd",
        sender: {
          avatar:"https://www.w3schools.com/howto/img_avatar2.png",
          name: "Chaman",
        },
        groupChat:true,
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
      },
      {
        attachments: [
            {
                public_id:"asdsad 2",
                url:"https://www.w3schools.com/howto/img_avatar.png"
            }
        ],
        content: "Aur ek message hai",
        _id: "abcd1234efgh5678",
        sender: {
          avatar:"https://www.w3schools.com/howto/img_avatar.png",
          name: "Rajesh",
        },
        groupChat:false,
        chat: "anotherChatId",
        createdAt: "2024-03-14T12:15:45.500Z",
      },
  ]
};

// export const sampleMessage = [
//     {
//       attachments: [
//         {
//           public_id: "asdsad",
//           url: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       ],
//       content: "L*uda ka Message hai",
//       _id: "sfnsdjkfsdnfkjsbnd",
//       sender: {
//         _id: "user_id",
//         name: "Chaman",
//       },
//       chat: "chatId",
//       createdAt: "2024-08-14T10:41:30.630Z",
//     },
//     {
//       attachments: [
//         {
//           public_id: "asdsad 2",
//           url: "https://www.w3schools.com/howto/img_avatar.png",
//         },
//       ],
//       content: "L*uda ka Message hai 2",
//       _id: "sfnsdjkfsdnfkjsbnd 2",
//       sender: {
//         _id: "sdfsdfsdf",
//         name: "Chaman2",
//       },
//       chat: "chatId",
//       createdAt: "2024-08-14T10:41:30.630Z",
//     },
//   ];
