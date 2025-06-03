const userAuth = () => {
  // const GoogleAuthButton = () => {
  //     window.location.href = 'http://localhost:3600/auth/google'
  // }

  const GoogleAuthButton = () => {
    window.location.href = "https://vidtrim-backend.onrender.com/auth/google";
  };

  const GithubAuthButton = () => {
    window.location.href = "http://localhost:3600/auth/github";
  };

  const name = 90;

  // const GoogleAuthButton = () => {
  //     window.location.href = 'https://vimtrim.onrender.com/auth/google'
  // }

  // const GithubAuthButton = () => {
  //     window.location.href = 'https://vimtrim.onrender.com/auth/github'
  // }

  return { GoogleAuthButton, GithubAuthButton };
};

export default userAuth;
