import React from 'react'
import Contact from "./Contact";


const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false,
      star: false
    },
    {
      name: 'Nellie Caldwell',
      //avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true,
      star: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true,
      star:true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false,
      star: false
    },
    {
      name: 'Juanita Phillips',
      //avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true,
      star: false
    }
  ];

  const placeholder = "https://www.drupal.org/files/issues/default-avatar.png"

  const ContactList = () => (
    <div>
      {users.map(element => (
        <Contact 
        key={element.name} 
        name={element.name} 
        avatar={element.avatar ? element.avatar : placeholder} 
        online={element.online}
        star={element.star} />
      ))}
    </div>
  );
 
  export default ContactList;