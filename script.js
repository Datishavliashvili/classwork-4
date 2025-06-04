// // // // // //loop while

// // // // // // 1 შევქნათ ცვლადი და იყოს რიცვხი 0

// // // // // // 2 გადავცემთ შედარების ოპერატორს ან უბრალოდ True/Flase-ს hiles
// // // // // // while(true)

// // // // // let num = 0;

// // // // // while (num < 5) {
// // // // //   num = num + 1;
// // // // //   console.log(num);
// // // // // }

// // // // let index = 0;
// // // // let myfriendlist = ["ani", "giorgi", "luka", "rati"];

// // // // while (index < myfriendlist.length) {
// // // //   console.log(myfriendlist[index]);
// // // //   index = index + 1;

// // // // }

// // // let myfriendlist = ["ani", "giorgi", "luka", "rati"];

// // // for (let index = 0; myfriendlist.length > index; index++) {
// // //   console.log(myfriendlist[index]);
// // // }

// // let myfriendlist = ["ani", "giorgi", "luka", "rati"];

// // myfriendlist.forEach(function (element, index) {
// //   console.log(
// //     `პიროვნება ჩემს სიაში სახელად ${element} არის ჩემს სიაში ${index}`
// //   );
// // });

const homeworks = [
  {
    title: "Student Grades",
    description:
      "Display a list of students with their grades and highlight those with a grade of A.",
    example: "John - A, Sarah - B, Mark - A",
  },
  {
    title: "Task Manager",
    description:
      "Create a task list from an array of tasks and mark completed tasks with a different color.",
    example: "Task 1: Complete, Task 2: Pending",
  },
  {
    title: "Online Store",
    description:
      "Display a list of products with their names, prices, and availability status.",
    example: "Product: Laptop, Price: $999, Status: In Stock",
  },
  {
    title: "Weather Report",
    description:
      "Show a list of cities with their current temperatures and weather conditions.",
    example: "City: New York, Temperature: 20°C, Condition: Sunny",
  },
  {
    title: "Contact List",
    description:
      "Generate a contact list from an array of people with their phone numbers and emails.",
    example: "John Doe - Phone: 123-456-7890, Email: john@example.com",
  },
];

const homeworkcontainer = document.querySelector("#homeworkcontainer");
console.log(homeworkcontainer);

for (let index = 0; index < homeworks.length; index++) {
  const card = document.createElement("div");
  card.innerHTML = `<></div>`;
  card.classList.add("card2");

  homeworkcontainer.appendChild(card);
}
// const card = document.createElement("div");
// card.textContent = "hello";
// card.classList.add("card2");

// homeworkcontainer.appendChild(card);
