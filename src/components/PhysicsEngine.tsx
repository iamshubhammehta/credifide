import React from 'react';

// PhysicsBody is now a simple pass-through wrapper (no physics engine)
interface PhysicsBodyProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const PhysicsBody = ({ id, children, className }: PhysicsBodyProps) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

// PhysicsWorld is now a simple layout wrapper — Anti-Gravity mode removed
interface PhysicsWorldProps {
  children: React.ReactNode;
  isGravityEnabled?: boolean;
  onToggleGravity?: () => void;
  onReset?: () => void;
}

export const PhysicsWorld = ({ children }: PhysicsWorldProps) => {
  return (
    <div className="relative min-h-screen w-full">
      {children}
    </div>
  );
};
