import React from 'react';
import Navbar from '../components/Navbar';
import MembersCard from '../components/MemberCard';
import '../App.css';

const Member =[ {
    Name: "Ashish Ranjan",
    Position: "Technical Lead",
    Bio: "Robotics enthusiast with expertise in embedded systems and automation.",
    Skills: ["Robotics", "Arduino", "ROS"],
    LinkedIn: "https://www.linkedin.com/in/ashishnith",
    Email: "ashishnith@gmail.com",
    Image: "https://ashishnith.github.io/RobosocNith/Assets/image.png",
},
{
    Name: "Ashish Ranjan",
    Position: "Technical Lead",
    Bio: "Robotics enthusiast with expertise in embedded systems and automation.",
    Skills: ["Robotics", "Arduino", "ROS"],
    LinkedIn: "https://www.linkedin.com/in/ashishnith",
    Email: "ashishnith@gmail.com",
    Image: "https://ashishnith.github.io/RobosocNith/Assets/image.png",
}
]

function Members() {
    console.log("Member data:", Member);
    return (
        <div className="text-center mt-10">
            <Navbar />
            <div className="MembersContainer">
                <MembersCard Member={Member} />
            </div>
        </div>
    );
}

export default Members;
