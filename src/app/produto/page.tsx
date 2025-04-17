import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";

export default function ProductScreen(){
    return(
    <ScrollView>
        <View style={styles.produto}>
        <View style={styles.header}>
 <
  Image
          style={styles.headerImage}
          source={require("@/assets/images/porcao.webp")}
        />
        <Text style={styles.produtoname}>Steak Porções Carnes Diversas</Text>
                <Text style={styles.subtitle}> R$32.70  </Text>
              </View>
               <Text style={styles.descricao}>Sobre</Text>
                <Text style={styles.descricaosubs}>As porções de churrasco podem incluir carnes em cubos ou tiras, peças de carne com acompanhamentos, espetinhos e outras opções.
                    Servindo támbem 2 pessoas </Text>

                    <Text style={styles.descricao}>Carnes e Acompanhamentos</Text>
               <Text style={styles.descricao}>Carnes</Text>
<Text style={styles.descricaosubs}>
  • Picanha{"\n"}
  • Alcatra{"\n"}
  • Contrafilé{"\n"}
  • Fraldinha{"\n"}
  • Maminha{"\n"}
  • Filé de costela{"\n"}
  • Linguiça{"\n"}
  • Asa de frango{"\n"}
  • Coxa ou sobrecoxa de frango{"\n"}
</Text>

<Text style={styles.descricao}>Acompanhamentos</Text>
<Text style={styles.descricaosubs}>
  • Arroz branco{"\n"}
  • Farofa{"\n"}
  • Vinagrete{"\n"}
  • Maionese{"\n"}
  • Mandioca{"\n"}
  • Salada de batata{"\n"}
  • Salada de maionese{"\n"}
</Text>

        </View>
</ScrollView>   
       
       
        
    )
}
    
        
    
