import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ComparePage } from './pages/ComparePage';
import { WebsiteInputModal } from './components/modals/WebsiteInputModal';
import { useWebsiteModal } from './hooks/useWebsiteModal';

export default function App() {
  const { isOpen, setIsOpen, websiteData, handleSubmit } = useWebsiteModal();

  return (
    <Router>
      <WebsiteInputModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
      <Routes>
        <Route path="/" element={<Dashboard websiteData={websiteData} />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </Router>
  );
}