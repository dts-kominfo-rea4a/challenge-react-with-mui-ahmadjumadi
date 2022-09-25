// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt={data.name} src={data.photo} />
            </ListItemAvatar>
            <ListItemText
            primary={
                <Typography>
                {data.name}
                </Typography>
            }
            secondary={
                <>
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.primary"
                    >
                        {data.phone}
                    </Typography>
                    
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.primary"
                    >
                        {data.email}
                    </Typography>
                </>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />

            {/* <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={data.photo} sx={{ width: 60, height: 60, marginRight: "1rem" }} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography component={"p"} sx={{ fontWeight: 500 }}>
                                {data.name}
                        </Typography>
                    }
                    secondary={
                        <>
                            <Typography component={"p"}>{data.phone}</Typography>
                            <Typography component={"p"}>{data.email}</Typography>
                        </>
                    }
                />
                
                <Divider variant="inset" component="li" />
            </ListItem> */}
        </>
    );
};

export default Contact;
