import React from 'react';

interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img src={src} alt="Avatar" />
    </div>
  );
}
