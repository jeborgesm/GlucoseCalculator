import React from 'react';

const FoodList = ({ foods, deleteFood, setEditingFood }) => (
    <div>
        <h2>Food List</h2>
        <ul className="list-group">
            {foods.map(food => (
                <li key={food.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {food.name} - {food.category} - {food.calories} calories
                    <div>
                        <button className="btn btn-primary btn-sm mr-2" onClick={() => setEditingFood(food)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteFood(food.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default FoodList;