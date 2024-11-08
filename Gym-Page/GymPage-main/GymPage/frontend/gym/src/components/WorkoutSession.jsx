import React from "react";

const WorkoutSessions = () => {
    return (
        <section className="workout_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSIONS</h1>
                <p>
                    Explore our top-rated workout sessions designed to help you achieve your fitness goals. From strength training to cardio, our sessions cater to all fitness levels.
                </p>
                <img src="/img5.jpg" alt="workout" />
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>
                    Join our featured bootcamps, where expert trainers lead high-energy sessions that challenge and motivate you. Build strength, endurance, and community!
                </p>
                <div className="bootcamps">
                    <div>
                        <h4>Body Pump Bootcamp</h4>
                        <p>
                            Get ready to build lean muscle and improve your endurance with our Body Pump Bootcamp. This class combines weightlifting with cardio for a full-body workout.
                        </p>
                    </div>
                    <div>
                        <h4>Cardio Kickboxing</h4>
                        <p>
                            Unleash your inner fighter in our Cardio Kickboxing sessions. This high-energy workout blends martial arts techniques with heart-pumping cardio.
                        </p>
                    </div>
                    <div>
                        <h4>Strength & Conditioning</h4>
                        <p>
                            Enhance your athletic performance with our Strength & Conditioning bootcamp. Focus on building strength, speed, and agility through a variety of exercises.
                        </p>
                    </div>
                    <div>
                        <h4>Core & Stability</h4>
                        <p>
                            Strengthen your core and improve your balance with our Core & Stability sessions. Target key muscle groups for a solid foundation in all your workouts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutSessions;