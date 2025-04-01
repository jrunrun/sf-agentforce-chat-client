import React, { useState } from "react";
import {
  ChatWindow,
  ChatMinimized,
  ChatErrorBoundary,
} from "./components/chat";
import ThemeProvider from "./contexts/ThemeContext";

const HealthCheck: React.FC = () => {
  return <div>OK</div>;
};

const AppContent: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Chat Widget */}
      {!isChatOpen && <ChatMinimized onMaximize={() => setIsChatOpen(true)} />}
      {isChatOpen && (
        <ChatErrorBoundary>
          <ChatWindow
            agentRole="AI Concierge"
            onClose={() => setIsChatOpen(false)}
          />
        </ChatErrorBoundary>
      )}
    </div>
  );
};

const App: React.FC = () => {
  // If the path is exactly '/', render the health check
  if (window.location.pathname === '/') {
    return <HealthCheck />;
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
