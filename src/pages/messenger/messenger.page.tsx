// import { Route } from '@/routes';

import { Content, Sidebar } from '@/components';

import styles from './messenger.module.scss';

const MessengerPage = () => {
  return (
    <div className={styles.Root}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default MessengerPage;
