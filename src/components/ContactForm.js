// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import {TextField, Card, Button, CardContent } from '@mui/material';
// Uncomment untuk memuat daftar kontak
import { useState } from 'react';

const ContactForm = ({formSubmitHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name : "", phone: "", email: "", photo: "",
    });

    const inputOnChangeHandler = (event) => {
        setNewContact({ ...newContact, [event.target.name]: event.target.value});
    };

    const submitForm = (event) => {
        event.preventDefault();
        formSubmitHandler(newContact);
        setNewContact({ name : "", phone: "", email: "", photo: "" });
    };

    return (
        <>
            <Card sx={{ padding: 3, backgroundColor: "#ffffff" }}>
                <form onSubmit={submitForm}>
                    <TextField type="text" label="Name" name="name" variant="filled" required  fullWidth style={{ width: "100%", margin: "5px" }} value={newContact.name} onChange={inputOnChangeHandler} />
                    <TextField type="text" label="Phone" name="phone" variant="filled" required  fullWidth style={{ width: "100%", margin: "5px" }} value={newContact.phone} onChange={inputOnChangeHandler} />
                    <TextField type="email" label="Email" name="email" variant="filled" required  fullWidth style={{ width: "100%", margin: "5px" }} value={newContact.email} onChange={inputOnChangeHandler} />
                    <TextField type="text" label="Photo URL" name="photo" variant="filled" required  fullWidth style={{ width: "100%", margin: "5px" }} value={newContact.photo} onChange={inputOnChangeHandler} />
                    <Button color="success" type="submit">ADD NEW</Button>
                </form>
            </Card>
        </>
    );
};

export default ContactForm;