export const columns = [
    {
      id: "ID",
      label: "ID",
      minWidth: "",
      align: "left",
    },
    {
      id: "Title",
      label: "Title",
      minWidth: 180,
      align: "left",
    },
    {
      id: "Dpt",
      label: "Dpt.",
      minWidth: 70,
      align: "left",
    },
    {
      id: "Return",
      label: "Return",
      minWidth: 70,
      align: "left",
    },
    {
      id: "Status",
      label: "Status",
      minWidth: "",
      align: "left",
    },
  ];


  export const rowData = [
    {
      id: 1,
      label: 1,
      title: "My First Booking Request",
      dpt: new Date().toLocaleDateString(),
      return: new Date().toLocaleDateString(),
      status: "Pending",
    },
    {
      id: 2,
      label: 2,
      title: "My Second Booking Request",
      dpt: new Date().toLocaleDateString(),
      return: new Date().toLocaleDateString(),
      status: "Booked",
    },
    {
      id: 3,
      label: 3,
      title: "My Third Booking Request",
      dpt: new Date().toLocaleDateString(),
      return: new Date().toLocaleDateString(),
      status: "Pending",
    },
    {
        id: 4,
        label: 4,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 5,
        label: 5,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 6,
        label: 6,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 7,
        label: 7,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 8,
        label: 8,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 9,
        label: 9,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 10,
        label: 10,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
      {
        id: 11,
        label: 11,
        title: "My Third Booking Request",
        dpt: new Date().toLocaleDateString(),
        return: new Date().toLocaleDateString(),
        status: "Pending",
      },
  ];

  export const instructions = [
    {
        id:1,
        title:"If you're not logged in, access to your booking history won't be available. Logging in will enable you to review your past bookings hassle-free."
    },

    {
        id:2,
        title:"For testing purposes, you can use the Demo Admin account with the credentials 'admin123/Password@1'. However, please note that using this account won't make actual bookings—it's solely for testing functionalities."
    },
    {
        id:3,
        title:"Fill in all mandatory fields to successfully submit your booking.This ensures accuracy and completion of your reservation."
    },
    {
        id:4,
        title:"Information won’t be saved if you're not logged in and click 'Save.' "
    },
    {
        id:5,
        title:"Save information to edit your booking before final submission.Your booking will remain in 'Pending' status until submission."
        
    },
]