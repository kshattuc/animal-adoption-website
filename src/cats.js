const Cats = () => {
  return (
    <div className="container">
      <h1>Claire</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 1.5 years</p>
          <p>Gender: female</p>
          <p>Breed: siamese</p>
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
          <p>Age: 3 years</p>
          <p>Gender: male</p>
          <p>Breed: british shorthair</p>
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
    </div>
  );
};

export default Cats;