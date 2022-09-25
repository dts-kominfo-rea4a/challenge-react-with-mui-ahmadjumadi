import './App.css';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import {Grid, Card, List} from '@mui/material';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

import contactsJSON from './data/contacts.json';
import { useState } from "react";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);
  const formOnSubmitHandler = (newContact) => {
    setContacts([...contacts, newContact])
  };

  return (
    <div className="App">
      <Header />
      <Grid container Spacing={3} sx={{ width: "100%", height: "100%", padding: 5 }}>
        <Grid item md={6}>
          <ContactForm formSubmitHandler={formOnSubmitHandler} />
        </Grid>
        <Grid item md={6}>
        <Card>
          <List sx={{ width: "100%", bgcolor: "#BDFFFC" }}>
            {contacts.map((contact, id) => (
              <Contact data={contact} key={id} />
            ))}
          </List>
        </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
