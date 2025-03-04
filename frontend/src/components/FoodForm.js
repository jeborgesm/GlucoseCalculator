import React, { useState, useEffect } from 'react';

const FoodForm = ({ addFood, editFood, editingFood }) => {
    const [food, setFood] = useState({ name: '', category: '', calories: '' });

    useEffect(() => {
        if (editingFood) {
            setFood(editingFood);
        } else {
            setFood({ name: '', category: '', calories: '' });
        }
    }, [editingFood]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingFood) {
            editFood(editingFood.id, food);
        } else {
            addFood(food);
        }
        setFood({ name: '', category: '', calories: '' });
    };

    return (
        <div>
            <h2>{editingFood ? 'Edit Food' : 'Add Food'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={food.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" name="category" value={food.category} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Calories</label>
                    <input type="number" className="form-control" name="calories" value={food.calories} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">{editingFood ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default FoodForm;