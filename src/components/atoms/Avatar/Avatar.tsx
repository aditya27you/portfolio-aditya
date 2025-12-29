
export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square' | 'squircle' | 'hexagon' | 'triangle';
  placeholder?: string;
  className?: string;
}

export const Avatar = ({ 
  src, 
  alt = 'Avatar', 
  size = 'md', 
  shape = 'circle', 
  placeholder, 
  className = '' 
}: AvatarProps) => {
  // Map size props to pixel widths (DaisyUI standard usually, but explicit width helps)
  const widthMap = {
    xs: 'w-8',
    sm: 'w-12',
    md: 'w-16',
    lg: 'w-24',
    xl: 'w-32'
  };

  const maskClass = shape === 'circle' ? 'rounded-full' : `mask mask-${shape}`;

  return (
    <div className={`avatar ${placeholder ? 'placeholder' : ''} ${className}`}>
      <div className={`${widthMap[size]} ${maskClass}`}>
        {src ? (
          <img src={src} alt={alt} />
        ) : (
          <span className="text-3xl">{placeholder || alt.charAt(0)}</span>
        )}
      </div>
    </div>
  );
};
