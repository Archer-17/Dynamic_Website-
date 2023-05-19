// Simulating an array of blog posts
const blogPosts = [
    {
      title: "Exploring the Wonders of Paris",
      date: "May 1, 2023",
      content: "Paris, the city of love, is filled with beautiful landmarks such as the Eiffel Tower and the Louvre Museum. I had an amazing time exploring the streets, tasting delicious croissants, and enjoying the romantic atmosphere."
    },
    {
      title: "A Beach Getaway in Bali",
      date: "April 15, 2023",
      content: "Bali is a paradise with its stunning beaches, lush rice terraces, and vibrant culture. I spent a week relaxing on the white sandy beaches, trying out surfing, and indulging in delicious local cuisine."
    },
    {
      title: "Hiking the Inca Trail to Machu Picchu",
      date: "March 28, 2023",
      content: "The Inca Trail leading to Machu Picchu is a challenging but rewarding experience. I trekked through breathtaking landscapes, explored ancient ruins, and finally reached the magnificent Machu Picchu at sunrise."
    },
    {
      title: "Sailing in the Greek Islands",
      date: "February 10, 2023",
      content: "The Greek Islands offer a magical sailing experience. I explored islands like Santorini and Mykonos, swam in crystal-clear waters, and witnessed stunning sunsets. It was a truly unforgettable adventure."
    },
    {
      title: "Discovering the Vibrant Tokyo",
      date: "January 22, 2023",
      content: "Tokyo, the capital of Japan, is a city that never fails to amaze. From futuristic technology to traditional temples, I immersed myself in the unique blend of modern and traditional culture. The food, fashion, and bustling cityscape were absolutely captivating."
    }
  ];
  
  // Function to create HTML elements for each blog post
  function createBlogPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = post.title;
  
    const dateElement = document.createElement("p");
    dateElement.innerHTML = `<em>${post.date}</em>`;
  
    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
  
    postElement.appendChild(titleElement);
    postElement.appendChild(dateElement);
    postElement.appendChild(contentElement);
  
    return postElement;
  }
  
  // Function to render blog posts on the webpage
  function renderBlogPosts() {
    const blogPostsContainer = document.getElementById("blogPosts");
  
    // Clear previous content
    blogPostsContainer.innerHTML = "";
  
    // Create and append blog post elements
    blogPosts.forEach(post => {
      const postElement = createBlogPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  // Call the renderBlogPosts function to display the initial blog posts
  renderBlogPosts();
  