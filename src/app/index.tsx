import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
export default function loginScreen(){
    return(
        <View style={styles.login}>
           <View>
              
                <Image style={styles.logoImage} source={require("@/assets/images/logoo.png")}/>
           </View>
           <View>
           <View style={styles.containerBox}>
                <Text style={styles.campo}>E-mail</Text>
                <TextInput placeholder="Digite seu e-mail"></TextInput>
            </View>
            <View style={styles.containerBox} >
                <Text style={styles.campo}>Senha</Text>
                <TextInput placeholder="Digite sua senha" secureTextEntry></TextInput>
            </View>
            <Link href={"/home/page"} asChild>
            <TouchableOpacity>
                <Text style={styles.enviar}>Enviar</Text>
            </TouchableOpacity>
            
            </Link>
            <Link href={"/cadastro/page"} asChild><Text style={styles.crieSuaConta}>Crie sua conta</Text></Link>
           </View>
        </View>
    )
}