const userAuth = () => {

  const GoogleAuthButton = () => {
    window.location.href = "https://vidtrim-backend.onrender.com/auth/google";
  };

  const GithubAuthButton = () => {
    window.location.href = "https://vidtrim-backend.onrender.com/auth/github";
  };

  const name = 90

  return { GoogleAuthButton, GithubAuthButton };
};

export default userAuth;
