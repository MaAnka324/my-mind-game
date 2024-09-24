import React, { memo } from "react";
import icons from "./icons";
import { View, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Text } from "react-native";
type props = {
	icon: keyof typeof icons;
    isActive?: boolean;
	size?: number;
};


export const Icon = memo(({icon, size = 24, isActive = false}: props) => {
	const PickedIcon = isActive ? icons[`${icon}Active`] : icons[icon];
	return <PickedIcon width={size} height={size} />;
});