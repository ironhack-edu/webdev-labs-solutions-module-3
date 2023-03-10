import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ addFoodHandler }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the page from reloading

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    // Add the food the list
    addFoodHandler(newFood);

    //clear the form after create
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form className="add-food-form" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleName}
      />

      <label>Image</label>
      <Input
        type="text"
        placeholder="https://example.com/image.jpg"
        value={image}
        onChange={handleImage}
      />

      <label>Calories</label>
      <Input type="number" value={calories} onChange={handleCalories} />

      <label>Servings</label>
      <Input type="number" value={servings} onChange={handleServings} />

      <button type="submit" className="ant-btn ant-btn-default toggle-btn">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
