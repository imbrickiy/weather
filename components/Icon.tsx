import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}
