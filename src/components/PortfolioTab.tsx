"use client";

type PortfolioTabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export function PortfolioTab({ label, isActive, onClick }: PortfolioTabProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full transition-all ${
        isActive 
          ? 'bg-primary text-white' 
          : 'bg-card-light dark:bg-card-dark text-gray-700 dark:text-gray-300 hover:bg-opacity-80'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}