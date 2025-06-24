window.addEventListener("scroll", function() {
    const navbar = document.getElementById("mynav");
    if (window.scrollY > 50) {
        navbar.classList.add("grayscale");
    } else {
        navbar.classList.remove("grayscale");
    }
});

// Sample data array
// const users = [
//     { name: "Alice", age: 25, city: "New York", image: "" },
//     { name: "Bob", age: 30, city: "Los Angeles", image: "https://via.placeholder.com/250" },
//     { name: "Charlie", age: 22, city: "Chicago", image: "https://via.placeholder.com/250" },
//     { name: "David", age: 28, city: "San Francisco", image: "https://via.placeholder.com/250" },
//     { name: "Roger", age: 22, city: "London", image: "https://via.placeholder.com/250" },
    
//   ];
  
//   // Get the container
//   const cardContainer = document.getElementById("cardContainer");
  
//   // Generate cards dynamically
//   users.forEach(user => {
//     const card = document.createElement("div");
//     card.classList.add("categories");
  
//     card.innerHTML = `
//         <img src="${user.image}" alt="User Image">
//         <h3>${user.name}</h3>
//         <p>Age: ${user.age}</p>
//         <p>City: ${user.city}</p>
//     `;
  
//     cardContainer.appendChild(card);
//   });
  