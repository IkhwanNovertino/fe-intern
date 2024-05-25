import React from 'react'

export default function BenefitItem({ title, description, index }) {
  return (
    <li>
      <div className="flex items-start">
        <div
          className="me-2 py-px px-3 bg-primary rounded-full text-lg font-semibold text-white mt-1"
        >
          {index}
        </div>
        <div
          className="text-dark text-xl font-medium py-1 capitalize"
        >
          {title}
        </div>
      </div>
      <div
        className="text-light text-base ms-[2.525rem] mb-3"
      >
        {description}
      </div>
    </li>
  );
}
