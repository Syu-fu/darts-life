import React from "react";

const UnderConstructionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
      <p className="text-lg mb-8">
        This page is currently under construction. Please check back later!
      </p>
      <div className="text-6xl">🚧</div>
    </div>
  );
};

export default UnderConstructionPage;
