import React from 'react';

const MemberCard = ({ name, title, imageUrl, description, skills }) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-front  bg-black2  text-white rounded-lg p-7 flex flex-col items-center justify-between">
                    <img src={imageUrl} alt={name} className="object-cover rounded  h-60 mb-4" />
                    <div>
                        <h2 className="text-xl font-bold text-purple-700">{name}</h2>
                    <p className="text-lg">{title}</p>
                    </div>
                </div>
                <div className="card-back gap-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg p-5 flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <div className="flex gap-2 mt-4">
                        {skills.map(skill => (
                            <span key={skill} className="skill-badge">{skill}</span>
                        ))}
                    </div>
                    <div className="flex gap-2 text-xl ">
                            <a href="#" className="rounded-full border-2 p-2">🔗</a>
                            <a href="#" className="rounded-full border-2 p-2">📧</a>
                            <a href="#" className="rounded-full border-2 p-2">💼</a>
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default MemberCard;


// How to pass props to the MemberCard component?

// <MemberCard 
//                 name="Henry cavil" 
//                 title="Technical Lead" 
//                 imageUrl="https://variety.com/wp-content/uploads/2016/03/henry-cavill.jpg" 
//                 description="Robotics enthusiast with expertise in embedded systems and automation."
//                 skills={['Robotics', 'Arduino', 'ROS']}
//             />