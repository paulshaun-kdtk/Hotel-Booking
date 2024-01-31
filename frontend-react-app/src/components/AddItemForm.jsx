import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddItemForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [finance_fee, setFinance_fee] = useState('');
  const [purchase_fee, setPurchase_fee] = useState('');
  const [total_amount, setTotal_amount] = useState('');
  const [duration, setDuration] = useState('');
  const [apr, setApr] = useState('');
  const [error, setError] = useState('');
  const currentUser = useSelector((state) => state.auth.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.trim() === '') {
        setError("Name can't be blank");
        return;
      }
      const dataToSend = {
        name,
        description,
        image,
        finance_fee,
        purchase_fee,
        total_amount,
        duration,
        apr,
      };
      if (currentUser.email === 'admin@gmail.com') {
        const response = await axios.post(
          'http://127.0.0.1:4000/api/v1/items',
          dataToSend,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
      } else {
        window.alert('You are not an authorized user to add Hotels.');
      }

      navigate('/homepage');
      setName('');
      setDescription('');
      setImage('');
      setFinance_fee('');
      setPurchase_fee('');
      setTotal_amount('');
      setDuration('');
      setApr('');
    } catch (error) {
      if (
        error.response
        && error.response.data
        && error.response.data.message[0]
      ) {
        setError(error.response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full bg-opacity-90">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Name
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Name"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="decription"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Description
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Description"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Image Url
              <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Image Url"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="finance_fee"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Finance Fee
              <input
                type="number"
                id="finance_fee"
                value={finance_fee}
                onChange={(e) => setFinance_fee(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Finance Fee"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="purchase_fee"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Purchase Fee
              <input
                type="number"
                id="purchase_fee"
                value={purchase_fee}
                onChange={(e) => setPurchase_fee(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Purchase Fee"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="total_amount"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Total Amount
              <input
                type="number"
                id="total_amount"
                value={(total_amount)}
                onChange={(e) => setTotal_amount(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Total amount"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Duration
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Duration"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="apr"
              className="block text-sm font-medium text-gray-500 text-left"
            >
              Apr
              <input
                type="number"
                id="apr"
                value={apr}
                onChange={(e) => setApr(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Apr in percentage"
              />
            </label>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-2 text-center text-white rounded-md bg-blue-600"
            >
              Add Home Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
