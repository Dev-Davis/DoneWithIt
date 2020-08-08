import React, { useState } from "react";
import { View, TextInput, Text, Switch } from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [ isNew, setIsNew] = useState(false)

  return (
    <Screen>
     <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>
  )
}
