import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";

const Signup = () => {
  const [createUser] = useCreateUser();

  const handleSubmitRegistration = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password,
        },
      },
    });
  };

  return (
    <Auth submitLabel="Sign Up" obSubmit={handleSubmitRegistration}>
      <Link to="/login" style={{ alignSelf: "center", textDecoration: "none" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
