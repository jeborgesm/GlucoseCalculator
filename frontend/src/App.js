import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList';
import FoodForm from './components/FoodForm';
import FoodSearch from './components/FoodSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [editingFood, setEditingFood] = useState(null);

    useEffect(() => {
        fetch('/api/foods')
            .then(response => response.json())
            .then(data => setFoods(data));
    }, []);

    const addFood = (food) => {
        fetch('/api/foods', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(food)
        })
            .then(response => response.json())
            .then(newFood => setFoods([...foods, newFood]));
    };

    const editFood = (id, updatedFood) => {
        fetch(`/api/foods/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedFood)
        })
            .then(response => response.json())
            .then(() => {
                setFoods(foods.map(food => (food.id === id ? updatedFood : food)));
                setEditingFood(null);
            });
    };

    const deleteFood = (id) => {
        fetch(`/api/foods/${id}`, { method: 'DELETE' })
            .then(() => setFoods(foods.filter(food => food.id !== id)));
    };

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1 className="my-4">Food App</h1>
            <FoodSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FoodForm addFood={addFood} editFood={editFood} editingFood={editingFood} />
            <FoodList foods={filteredFoods} deleteFood={deleteFood} setEditingFood={setEditingFood} />
        </div>
    );
}

export default App;