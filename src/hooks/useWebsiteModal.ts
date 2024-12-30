import { useState, useEffect } from 'react';

export function useWebsiteModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [websiteData, setWebsiteData] = useState<any>(null);

  // Check if user has already entered a website
  useEffect(() => {
    const savedData = localStorage.getItem('websiteData');
    if (savedData) {
      setWebsiteData(JSON.parse(savedData));
      setIsOpen(false);
    }
  }, []);

  const handleSubmit = (data: any) => {
    setWebsiteData(data);
    localStorage.setItem('websiteData', JSON.stringify(data));
  };

  return {
    isOpen,
    setIsOpen,
    websiteData,
    handleSubmit,
  };
}