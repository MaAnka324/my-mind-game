import { TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from "../img/Icon"
import icons from "./../img/icons";

type StartGameType = {
    icon: keyof typeof icons
    start?: () => void
}


export const StartGameButton = (props:StartGameType) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Icon icon={props.icon} size={130}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      margin: 10,
      alignItems: 'center',
    }
  });