// api/fetchAnalytics.js
const axios = require("axios");
module.exports = async (req, res) => {
  console.log(
    "my1" + process.env.VUE_APP_VERCEL_ID,
    "my12" + process.env.VUE_APP_VERCEL_ID
  );
  const projectId = process.env.VUE_APP_VERCEL_PROJECT_ID;
  const response = await axios.get(
    `https://api.vercel.com/v1/analytics/views?projectId=${projectId}&period=30`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.VUE_APP_VERCEL_ID}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
};
