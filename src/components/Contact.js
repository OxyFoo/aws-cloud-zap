import React from 'react';
import styles from '../styles/Contact.module.css';
import stylesFlex from '../styles/Flex.module.css';


const Contact = () => {

  const all_contacts = [
    {
      name: "Email",
      value: "gepidev@gmail.com",
      displayVal: "",
      href: "mailto:"
    },
    /*
    {
      name: "Linkedin",
      value: "https://www.linkedin.com/company/84781118/admin/feed/posts/",
      displayVal: "My Linkedin",
      href: ""
    },
    {
      name: "Github",
      value: "https://github.com/AphroMad",
      displayVal: "My Github",
      href: ""
    },
    {
      name: "Phone",
      value: "+33 6 37 77 82 60",
      displayVal: "",
      href: "tel:"
    },
    */
  ]


  return (
    <section className={styles.contact}>
      <h1 className="centeredTitle">How To reach me </h1>
      <h4 className="centeredTitle">(I&apos;m a dragon so technically you can&apos;t, but you can reach my Creator)</h4>
      <div className={`${stylesFlex.flexRowCC}`}>
        <div className={`${stylesFlex.flexRowSC} ${stylesFlex.flexWrapper}`}>
          {all_contacts.map((contact, index) => (
            <div className={styles.contactPart} key={index}>
              <p style={{ fontSize: "0.9rem", color: "#999999" }}>{contact.name}</p>
              <a style={{ fontSize: "1.3rem" }} href={contact.href + contact.value}>{contact.displayVal ? contact.displayVal : contact.value}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
