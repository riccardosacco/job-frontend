const contentful = require("contentful");

const client = contentful.createClient({
  space: "idh8yxhxz3sf",
  accessToken: "FZVKkfM9sdP4RvUM6Wxuk7K3T5b2-GN_ZpOKIg9MQX8"
});

export default client;

// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));
