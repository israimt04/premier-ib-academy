import React from 'react';
import { Phone, User, ShoppingBag } from 'lucide-react';

const NavigationButtons = () => {
  return (
    <>
      <style jsx>{`
        .icon-button {
          background-color: #ffd369; 
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
          transition: transform 0.3s ease-in-out; 
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px; 
          height: 50px; 
          border-radius: 50%; 
        }

        .icon-button:hover {
          transform: translateY(-2px); 
        }

        .icon {
          width: 26px; 
          height: 26px;
          color: #000; 
        }
      `}</style>

      <div className="flex space-x-4">
        <a href="/phone" className="icon-button">
          <Phone className="icon" />
        </a>

        <a href="/user" className="icon-button">
          <User className="icon" />
        </a>

        <a href="/shopping" className="icon-button">
          <ShoppingBag className="icon" />
        </a>
      </div>
    </>
  );
};

export default NavigationButtons;