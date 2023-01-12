const AuthorizationHeader = () => {
  //get token from session storag
  const token = JSON.parse(localStorage.getItem("token"));
  if (token !== undefined) {
    console.log({ Authorization: "Bearer " + token });
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};

export { AuthorizationHeader };
