import React, { useState } from "react";

function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !position || !phone || !address) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, position, phone, address }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Employee added successfully');
        setName('');
        setEmail('');
        setPosition('');
        setPhone('');
        setAddress('');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setError('Error while adding employee. Please try again.');
    }
  };

  return (
    <div className="employee-form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter employee's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter employee's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            placeholder="Enter employee's position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter employee's phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter employee's address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="submit-button">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
