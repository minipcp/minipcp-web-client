import "whatwg-fetch";
import restful, { fetchBackend } from "restful.js";
import params from "../core/params.js";

const api = restful(params.api.baseUrl, fetchBackend(fetch));
const menus = api.custom("acs_menus/?where=nivel<2&orderby=coluna,ordemgeral");


const menuOptions = (menusData, nivel, indiceInicial) => {
    let length = menusData.length;
    let nivelConcluido = false;

    return menusData.reduce(function (result, item, indice) {

        if (indice >= indiceInicial && item.nivel < nivel) {
            nivelConcluido = true;
        }

        if ( nivelConcluido || item.nivel != nivel || indice < indiceInicial || (item.nive > 0 && "P" === item.acaotipo) ) {
            return result;
        }


        if (indice < length-1 && menusData[indice+1].nivel > nivel) {
            return [...result, {
                active: false,
                caption: item.caption,
                options: menuOptions(menusData, menusData[indice+1].nivel, indice + 1)
            }];
        }
        
        return [...result, {
            active: false,
            caption: item.caption,
            divider: "S" === item.acaotipo
        }];
        
    }, []);
};


const menusFetch = (callback) => {
    menus.get("").then((response) => {
        const menusEntity = response.body();
        if ( callback ) {
            callback(menuOptions(menusEntity.data().result, "0", 0));
        }
    }, (response) => {
        console.log(response);
        console.log("ERRO");
    });
}

export default menusFetch;

