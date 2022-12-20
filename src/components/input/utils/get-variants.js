const getVariant = (props) => {
  if (props.primary) {
    return "primary";
  } else if (props.secondary) {
    return "secondary";
  }

  return null;
};

export default getVariant;
