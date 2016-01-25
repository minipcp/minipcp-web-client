import "whatwg-fetch";
import restful, { fetchBackend } from "restful.js";
import params from "./core/params.js";

const api = restful(params.api.baseUrl, fetchBackend(fetch));
const participantes = api.all("nfe_participantes");

const particpantesFetch = () => {
    participantes.get("").then((response) => {
        const participantesCollection = response.body();
        console.log(participantesCollection.data());
    }, (response) => {
        console.log(response);
        console.log("ERRO");
    });
}

export default particpantesFetch;

