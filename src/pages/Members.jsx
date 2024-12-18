import React from 'react';
import Navbar from '../components/Navbar';
import MemberCard from '../components/MemberCard';
import '../App.css';
import FloatingShape from '../components/FloatingShape';
import Footer from '../components/Footer';

const MembersData = [
        {
        "name": "Ashish Ranjan",
        "position": "Technical Lead",
        "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "bio": "Robotics enthusiast with expertise in embedded systems and automation.",
        "skills": ["Robotics", "Arduino", "ROS"],
        "socialLinks": [
            "https://github.com/ashishnith",
            "mailto:ashishnith@gmail.com",
            "https://linkedin.com/in/ashishnith"
        ]
    },
    {
        "name": "Ravi Kumar",
        "position": "Software Developer",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "bio": "Passionate about developing scalable web applications and working with modern web technologies.",
        "skills": ["JavaScript", "React", "Node.js"],
        "socialLinks": [
            "https://github.com/ravikumar",
            "mailto:ravi@gmail.com",
            "https://linkedin.com/in/ravikumar"
        ]
    },
    {
        "name": "Anjali Sen",
        "position": "Cloud Engineer",
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "bio": "Specialized in cloud infrastructure and services.",
        "skills": ["AWS", "Azure", "Kubernetes"],
        "socialLinks": [
            "https://github.com/anjalisen",
            "mailto:anjali@gmail.com",
            "https://linkedin.com/in/anjalisen"
        ]
    },
    {
        "name": "Vikram Patel",
        "position": "Data Scientist",
        "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        "bio": "Data enthusiast with a knack for uncovering insights from complex datasets.",
        "skills": ["Python", "Machine Learning", "Data Analysis"],
        "socialLinks": [
            "https://github.com/vikrampatel",
            "mailto:vikram@gmail.com",
            "https://linkedin.com/in/vikrampatel"
        ]
    },
    {
        "name": "Priya Sharma",
        "position": "UX/UI Designer",
        "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        "bio": "Designing intuitive user interfaces to enhance user experience.",
        "skills": ["Sketch", "Figma", "Adobe XD"],
        "socialLinks": [
            "https://github.com/priyasharma",
            "mailto:priya@gmail.com",
            "https://linkedin.com/in/priyasharma"
        ]
    },
    {
        "name": "Amit Joshi",
        "position": "DevOps Engineer",
        "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "bio": "Ensuring smooth deployment pipelines and infrastructure management.",
        "skills": ["Docker", "Jenkins", "CI/CD"],
        "socialLinks": [
            "https://github.com/amitjoshi",
            "mailto:amit@gmail.com",
            "https://linkedin.com/in/amitjoshi"
        ]
    },
    {
        "name": "Neha Gupta",
        "position": "Product Manager",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "bio": "Leading product development with a focus on user-centric design.",
        "skills": ["Product Management", "Agile", "Scrum"],
        "socialLinks": [
            "https://github.com/nehagupta",
            "mailto:neha@gmail.com",
            "https://linkedin.com/in/nehagupta"
        ]
    },
    {
        "name": "Suresh Iyer",
        "position": "Cybersecurity Analyst",
        "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "bio": "Protecting systems and networks from digital attacks.",
        "skills": ["Network Security", "Penetration Testing", "Incident Response"],
        "socialLinks": [
            "https://github.com/sureshiyer",
            "mailto:suresh@gmail.com",
            "https://linkedin.com/in/sureshiyer"
        ]
    },
    {
        "name": "Kavita Rao",
        "position": "AI Researcher",
        "image": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
        "bio": "Exploring the frontiers of artificial intelligence and machine learning.",
        "skills": ["Deep Learning", "Natural Language Processing", "TensorFlow"],
        "socialLinks": [
            "https://github.com/kavitarao",
            "mailto:kavita@gmail.com",
            "https://linkedin.com/in/kavitarao"
        ]
    },
    {
        "name": "Rajesh Singh",
        "position": "Blockchain Developer",
        "image": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        "bio": "Building decentralized applications on blockchain platforms.",
        "skills": ["Ethereum", "Smart Contracts", "Solidity"],
        "socialLinks": [
            "https://github.com/rajeshsingh",
            "mailto:rajesh@gmail.com",
            "https://linkedin.com/in/rajeshsingh"
        ]
    },
    {
        "name": "Meera Nair",
        "position": "Mobile App Developer",
        "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "bio": "Creating seamless mobile experiences for Android and iOS users.",
        "skills": ["Flutter", "React Native", "Swift"],
        "socialLinks": [
            "https://github.com/meeranair",
            "mailto:meera@gmail.com",
            "https://linkedin.com/in/meeranair"
        ]
    },
    {
        "name": "Anand Verma",
        "position": "Game Developer",
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "bio": "Designing immersive gaming experiences across platforms.",
        "skills": ["Unity", "C#", "Game Design"],
        "socialLinks": [
            "https://github.com/anandverma",
            "mailto:anand@gmail.com",
            "https://linkedin.com/in/anandverma"
        ]
    }
]

function Members() {
    return (
      <>
        <FloatingShape />
      <Navbar />
      <div className="MembersContainer">
        <MemberCard members={MembersData} />
            </div>
            <Footer />  
      </>
    );
}

export default Members;
