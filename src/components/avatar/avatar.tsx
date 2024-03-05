import IMAGES from '@/assets';

// import styles from './avatar.module.scss';

type AvatarProps = {
  src?: string;
  username?: string;
  height?: number;
  width?: number;
};

const Avatar = ({ src, username, height, width }: AvatarProps) => {
  return (
    <div className="d-flex-row">
      <img
        src={src || IMAGES.noavatar}
        alt={username}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          objectFit: 'cover',
          borderRadius: '0.5rem',
        }}
      />
      <span className="usern" style={{ fontSize: '1rem' }}>
        {username || ''}
      </span>
    </div>
  );
};

export default Avatar;
