// MembersCard.jsx
import React from 'react';
import '../css/MemberCard.css';

const MembersCard = ({ Member }) => {
  console.log("Received Member prop:", Member); // Debug log
  
  if (!Member || Member.length === 0) {
    return <div>No members to display</div>;
  }

  return (
    <div className="member-card">
      {Member.map((member, index) => (
        <div className="card-inner" key={index}>
          <div className="card-front">
            <div className="hex-image">
              <img src={member.Image} alt={member.Name} className="member-image" />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.Name}</h3>
              <p className="member-position">{member.Position}</p>
            </div>
          </div>
          <div className="card-back">
            <h3 className="member-name">{member.Name}</h3>
            <p className="member-bio">{member.Bio}</p>
            <div className="skills">
              {member.Skills.map((skill, skillIndex) => (
                <span className="skill-tag" key={skillIndex}>{skill}</span>
              ))}
            </div>
            <div className="social-links">
              <a href={member.LinkedIn} className="social-link" target="_blank" rel="noopener noreferrer">🔗</a>
              <a href={`mailto:${member.Email}`} className="social-link" target="_blank" rel="noopener noreferrer">📧</a>
              <a href={member.LinkedIn} className="social-link" target="_blank" rel="noopener noreferrer">💼</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersCard;