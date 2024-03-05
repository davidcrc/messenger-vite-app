import { Avatar } from '@/components';

import styles from './contact-item.module.scss';

const ContactItem = () => {
  return (
    <div className={styles.Root}>
      <Avatar height={55} width={55} username="John Doe" />
    </div>
  );
};

export default ContactItem;
