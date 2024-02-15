interface ClerkLayoutProps {
  children: React.ReactNode;
}

const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
