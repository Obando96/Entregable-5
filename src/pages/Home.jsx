import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/Home.css"
const Home = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameTrainer = e.target.nameTrainer.value;
        dispatch(setNameTrainerGlobal(nameTrainer));
    }
  return (
    <main className="home">
      <section className="home_section">
        <div className="home_img">
          <img src="/images/image 11.png" alt="" />
        </div>
        <h2 className="home_trainer">Hello trainer!</h2>
        <p>Give me your name to start!</p>

        <form className="home_form" onSubmit={handleSubmit}>
            <input className="home_input" id='nameTrainer' type="text" placeholder="Your name..." />
            <button className="home_btn">Start</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
