import React from "react";
import * as Icons from "react-icons/bs";

function DynamicIcons({ iconName }) {
  const IconComponent = Icons[iconName];
  return <IconComponent />;
}

export default DynamicIcons;
