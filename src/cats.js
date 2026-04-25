const Cats = () => {
  return (
    <div className="container">
      <h1>Claire</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 4 months</p>
          <p>Gender: Female</p>
          <p>Breed: Siamese</p>
          <p>Color: Cream/Dark Brown</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Claire is a very playful kitty who loves attention.</p>

          <img
            src="/images/claire.jpg"
            alt="cat"
            style={{ width: "50%" }}
          />
        </div>
      </div>
      <h1>Whiskers</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 2 months</p>
          <p>Gender: Male</p>
          <p>Breed: British Shorthair</p>
          <p>Color: Grey/Tan/White</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Whiskers is very mischevious and loves to play and hide toys around the house.</p>

          <img
            src="/images/whiskers.jpg"
            alt="cat"
            style={{ width: "50%" }}
          />
        </div>
      </div>
      <h1>Midnight</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 12 weeks</p>
          <p>Gender: Female</p>
          <p>Breed: Maine Coon</p>
          <p>Color: Black</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Midnight enjoys nature and walking outside. She is very intelligent and picks up new skills quickly. </p>

          <img
            src="/images/midnight.png"
            alt="cat"
            style={{ width: "50%" }}
          />
        </div>
      </div>
      <h1>Fibonacci</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 6 weeks</p>
          <p>Gender: Male</p>
          <p>Breed: Munchkin Cat</p>
          <p>Color: White/Yellow/Grey</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Fibonacci loves to learn new skills. He also loves to curl up by the fire. </p>

          <img
            src="/images/fibonacci.png"
            alt="cat"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cats;