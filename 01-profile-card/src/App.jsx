import './App.css'; // Make sure your CSS is imported

const Card = ({ name, image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name} avatar`} />
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Profile Cards</h1>
      {/* This div will act as the flex container for your cards */}
      <div className="card-list-container">
        <Card
          name="John Doe"
          image="https://via.placeholder.com/150/FF0000/FFFFFF?text=JD"
          title="Software Engineer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Card
          name="Jane Smith"
          image="https://via.placeholder.com/150/00FF00/FFFFFF?text=JS"
          title="Product Manager"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          name="Alex Johnson"
          image="https://via.placeholder.com/150/0000FF/FFFFFF?text=AJ"
          title="UX Designer"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        {/* Add more <Card /> components here as needed */}
      </div>
    </div>
  );
};

export default App;