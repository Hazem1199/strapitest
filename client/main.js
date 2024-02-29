const fetchData = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer b0a2fa13d6b62e3acf257b51751acccace610437c739b90816a3dfb121e18734bcc268610c9daf3e8c168f952def1278bbe8245b671a8de5e392eb6f031682e069e96703df7802e32ccc50083dd315db6d714424a23c80ae5fc71cbca407f577bbb68caeba2bab43cb04f3b3a45c428cae26255dcf355f8c001e2062cc884c4a",
    },
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "ttp://localhost:1337/api/emhps",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};

fetchData();
