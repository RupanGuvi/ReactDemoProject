import React from "react";

const Category = () => {
  const categories = [
    {
      title: "Men",
      imageUrl:
        "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg",
    },
    {
      title: "Women",
      imageUrl:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
    },
    {
      title: "Kids",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/10/28/09/02/kids-4583785_960_720.jpg",
    },
  ];

  return (
    <div className="container mx-auto  grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((element, index) => {
        return (
          <div
            key={index}
            className="relative h-64 cursor-pointer tranform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={element.imageUrl}
              alt={element.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute top-20 left-10">
              <h3 className="text-lg font-bold">{element.title}</h3>
              <h3 className="text-slate-950">View All</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
