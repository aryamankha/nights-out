import axios from "axios";

const sheetsURL =
  "https://sheet.best/api/sheets/72f2ab71-fc0e-462b-b75c-ff325c4d2763";
const handler = async (req, res) => {
  await axios
    .get(sheetsURL)
    .then((response) => {
      res.status(response.status).send({ events: response.data });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

export default handler;
