import {
    Center
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {cutString} from "../lib/helpers";
import Card from "../components/card";

const Home = () => (
    <Layout>
        <Center minHeight={"90vh"}>
            <Card
                title="NOAH LHOTE"
                subTitle={cutString("DÉVELOPPEUR FULLSTACK")}
                image="/images/devonpc.png"
                tags={[
                    'Alternance',
                    'Frontend',
                    'Backend',
                ]}
            >
                Je suis actuellement en recherche d'une entreprise pour une alternance en tant que Développeur pour 12 mois à partir de septembre
            </Card>
        </Center>
    </Layout>
)

export default Home
export {getServerSideProps} from '../components/chakra'
