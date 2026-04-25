const Dogs = () => {
  return (
    <div className="container">
      <h1>Sadie</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 1 year</p>
          <p>Gender: Female</p>
          <p>Breed: Schnauzer</p>
          <p>Color: Black</p>
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
      <h1>Candy</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 12 weeks </p>
          <p>Gender: Female</p>
          <p>Breed: Labrador Retriever</p>
          <p>Color: Yellow</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Candy is very affectiate and loves to give you kisses. She will follow you around the house and won't leave you side. </p>
          <img
            src="/images/candy.png"
            alt="dog"
            style={{ width: "50%" }}
          />
        </div>
      </div>
        <h1>Eddy</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 6 weeks </p>
          <p>Gender: Male</p>
          <p>Breed: Dachshunds</p>
          <p>Color: Brown</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Eddy loves to play and go on walks. He loves other animals and is great around kids. </p>
          <img
            src="/images/eddy.png"
            alt="dog"
            style={{ width: "50%" }}
          />
        </div>
      </div>
        <h1>Loco</h1>

      <div className="row mt-5">
        <div className="col-3">
          <p>Available: Yes!</p>
          <p>Age: 5 months </p>
          <p>Gender: Male</p>
          <p>Breed: Cavalier King Charles Spaniel</p>
          <p>Color: White/Brown</p>
          <p>House-trained: Yes</p>
          <p>Spayed/Neutered: Yes</p>
          <p>Vaccinated: Yes</p>
          <p>Loco is a goofball who loves to run in circles and chase his own tail. He loves to play fetch and jump around. </p>
          <img
            src="/images/loco.png"
            alt="dog"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dogs;