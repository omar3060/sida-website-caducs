import React from "react";

const LocaleProvider = ({ children, params }) => {
  const { locale } = params;

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { locale })
  );
};

export default LocaleProvider;
