const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "admin",
        mongodb_password: "djaISxJ7fvwfLCxj",
        mongodb_clustername: "cluster0",
        mongodb_database: "react-next",
      },
    };
  }

  return {
    env: {
      mongodb_username: "admin",
      mongodb_password: "djaISxJ7fvwfLCxj",
      mongodb_clustername: "cluster0",
      mongodb_database: "react-next",
    },
  };
};
