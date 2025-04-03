import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cadastro/style"
export default function loginScreen(){
    return(
        <View style={styles.cadastro}>
            <View style={styles.email}>
                <Text>E-mail</Text>
                <TextInput placeholder="Digite seu e-mail"></TextInput>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Digite sua senha" secureTextEntry></TextInput>
            </View>
            <Link href={"/home/page"} asChild>
            <TouchableOpacity>
                <Text>Enviar</Text>
            </TouchableOpacity>
            
            </Link>
            <Link href={"/cadastro/page"} asChild><Text>Crie sua conta</Text></Link>
        </View>
    )
}