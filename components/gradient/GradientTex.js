import MaskedView from "@react-native-community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../consts/colors";
import { FlatList, Text, View } from 'react-native'

export function GradientTex(props) {


    return (
        <MaskedView
            maskElement={<Text style={[props.style, { backgroundColor: 'transparent' }]}>{props.text}</Text>}>
            <LinearGradient
                colors={[COLORS.white, COLORS.green]}>
                <Text style={[props.style, { opacity: 0.12 }]}>{props.text}</Text>
            </LinearGradient>
        </MaskedView>
    )
}

