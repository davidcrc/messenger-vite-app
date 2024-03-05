import { useState } from 'react';

import { Avatar, ChatItem, ContactItem } from '@/components';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  const [newChat, setNewChat] = useState(false);

  return (
    <div className={styles.Root}>
      <div className={styles.Wrapper}>
        <div className={styles.Wrapper__top}>
          <Avatar src="" height={45} width={45} />
          {newChat && (
            <span className={styles['Wrapper__top__new-conversation']}>
              Add conversation
            </span>
          )}
          <div
            className={`app-icon ${newChat ? 'active' : ''}`}
            onClick={() => setNewChat((prev) => !prev)}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>

        <div className={styles.Wrapper__center}>
          <div className={styles['Wrapper__center__search-wrapper']}>
            <div
              className={
                styles['Wrapper__center__search-wrapper__input-wrapper']
              }
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder={`Search a ${newChat ? 'contact' : 'conversation'}`}
              />
            </div>
          </div>

          <div className={styles['Wrapper__center__center-wrapper']}>
            {newChat ? (
              <div
                className={
                  styles['Wrapper__center__center-wrapper__items-wrapper']
                }
              >
                {[...Array(50)].map((contact, index) => {
                  return <ContactItem key={index} />;
                })}
              </div>
            ) : (
              <div
                className={
                  styles['Wrapper__center__center-wrapper__items-wrapper']
                }
              >
                {[...Array(50)].map((contact, index) => {
                  return <ChatItem key={index} />;
                })}
              </div>
            )}
          </div>
        </div>

        <div className={styles.Wrapper__bottom}>
          <button className="logout-btn">
            <i className="fa-solid fa-power-off"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
