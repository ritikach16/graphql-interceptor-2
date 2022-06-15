import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";


const LogOutButton = () => {
   
    const { logout } = useAuth0();

    return (
       <Button
                sx={{
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px",
                    justifyContent: "center",
                    width: "100px",
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                <Typography variant="body1">Logout</Typography>
       </Button>

    );
};

export default LogOutButton;
