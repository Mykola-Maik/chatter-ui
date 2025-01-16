import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth submitLabel="Login" obSubmit={async () => {}}>
      <Link
        to="/signup"
        style={{ alignSelf: "center", textDecoration: "none" }}
      >
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;
