const Dogs = () => {
  return (
    <div className="container">
      <h1>Sadie</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 1 year</p>
          <p>Gender: female</p>
          <p>Breed: schnauzer</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Sadie is very playful and especially loves to play with frisbees. She loves to drink water and will eat literally anything.</p>
          <img
            src="/images/sadie.png"
            alt="dog"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dogs;