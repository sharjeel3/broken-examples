import React from "react";

export default ({ names }) => {
  return ({names.map(name => {
      return <p>{name}</p>;
    })})
};
