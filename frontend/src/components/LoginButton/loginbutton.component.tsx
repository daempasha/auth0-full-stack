import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface iLoginButton {
  screenHint?: "signup" | "signin";
  text?: string;
}
const LoginButton = ({
  screenHint = "signin",
  text = "Sign in",
}: iLoginButton) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: screenHint,
        })
      }
    >
      {text}
    </button>
  );
};

export default LoginButton;
