import { getApiDocs } from "../../../lib/swagger";
import ReactSwagger from "./react-swagger";

export default async function IndexPage() {
    const spec = await getApiDocs();
    console.log('Spec in IndexPage:', spec);

    return (
        <section className="container">
            <ReactSwagger spec={spec} />
        </section>
    );
}