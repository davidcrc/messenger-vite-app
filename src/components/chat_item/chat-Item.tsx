import { Avatar } from '@/components';

import styles from './chat-Item.module.scss';

const ChatItem = () => {
  return (
    <div className={styles.Root}>
      <Avatar height={55} width={55} username="John Doee" />

      <div className={styles.Content}>
        <div className="avatr-infos">
          <span className="username">John Doe</span>
          <span className="time-line">2 days ago</span>
        </div>

        <p className="last-message">Lorem ipsum</p>
      </div>
    </div>
  );
};

export default ChatItem;
